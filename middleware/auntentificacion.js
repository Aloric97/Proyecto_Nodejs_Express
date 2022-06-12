import {sequelize} from '../database/database.js';
import bcrypt  from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../models/usuario.js';
import {usuario_duplicado, email_duplicado} from '../middleware/auntentificacion.js';

export const registrar= (req, res) => {
    Usuario.create({
        nombre_usuario: req.body.nombre_usuario,
        contraseña: bcrypt.hashSync(req.body.contraseña, 10),
        email: req.body.email,
    }).then(usuario => {
        res.status(200).send({
            message: "Usuario creado correctamente",usuario
        })}).catch(error => {
        res.status(400).send({
            message: "Error al crear el usuario:", error
        })
    })};
