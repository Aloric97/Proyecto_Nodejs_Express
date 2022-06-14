//importamos tabla usuario 
import {Usuario} from '../models/usuario.js';
//importamos configuracion



//importamos librerias
import bcrypt from 'bcrypt';
import jwp from 'jsonwebtoken';

//login
export const signIn =  (req, res) => {
    let { email, contrasenia } = req.body;
    //buscar usuario por email
    Usuario.findOne({
        where: {
            email:email
        }}).then(user => {
            //si no existe usuario
            if(!user){
                res.status(401).send({
                    message: "error, usuario no existe"
                });
    
            } else {
                if(bcrypt.compareSync(contrasenia, user.contrasenia)){
                    //generar token
                    let token = jwp.sign({ user: user }, 'prueba12345', { expiresIn:'10h' });
                    res.status(200).json({
                        user:user,
                        token:token
                    })
                } else {
                    res.status(401).json({
                        msg: "error, contraseña incorrecta"
                    });
                }

            }
               
        })
    }


//registro
export const signUp =  (req, res) => {
    //encriptamos el password
    let contrasenia = bcrypt.hashSync(req.body.contrasenia, 10); 
    //crear usuario
    Usuario.create({
        nombre_usuario: req.body.nombre_usuario,
        contrasenia: contrasenia,
        email: req.body.email
    }).then(usuario => {
        //generar token
        let token = jwp.sign({ usuario: usuario }, 'prueba12345', { expiresIn:'10h' });
        //devolverlo
        res.json({
            usuario: usuario,
            token: token
        });
    }).catch(err => {
        res.status(500).json(err);
    })

}