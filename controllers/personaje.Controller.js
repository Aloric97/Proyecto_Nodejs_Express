import multer from 'multer';
import path from 'path';
import {Personaje} from '../models/personaje.js';

// CARGAR UNA IMAGEN

const store = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'images/personajes');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now + path.extname(file.originalname));
    },
});

const upload =  multer
    ({ storage:store._handleFile,
        limits: { fileSize: '10000000' },
        fileFilter: (req, file, cb) => {
            const filetypes = /jpeg|jpg|png|gif/;
            const mimetype = filetypes.test(file.mimetype);
            const extname = filetypes.test(path.extname(file.originalname));
            if (mimetype && extname) {
                return cb(null, true);
            }
            cb('Error: Archivo no permitido');
        }
    }).single('images');


// OBTENER TODOS LOS PERSONAJES

export const getPersonajes = async (req, res) => { //asincrono porque esta haciendo una consulta a la base de datos
        await Personaje.findAll({
            attributes: ['id', 'nombre', 'images']}).then(personajes => {
                res.json(personajes);
            })  //si todo sale bien, se envia el json con los personajes
        }

       


// CREACION DE UN PERSONAJE
export const createPersonaje = async (req, res) => {
    const {nombre, edad, peso, historia} = req.body;
    const newPersonaje= await Personaje.create({  //asincrono porque esta guardando una consulta a la base de datos
    nombre,
    edad,
    peso,
    historia
    });
    
    res.send('creando un personaje');
    res.send(newPersonaje);
    
};

// ACTUALIZA UN PERSONAJE
export const updatePersonaje = async (req, res) => {
    const {nombre, edad, peso, historia} = req.body;
    const {id} = req.params;
    const update_Personaje = await Personaje.findByPk(id);
    if(update_Personaje==null) {
        res.status(404).json({
            message: 'Personaje no encontrado'
        })
    } else {
        update_Personaje.nombre = nombre;
        update_Personaje.edad = edad;
        update_Personaje.peso = peso;
        update_Personaje.historia = historia;
        await update_Personaje.save();
        res.send(update_Personaje);
       
    }
    
};

// ELIMINA UN PERSONAJE
export const deletePersonaje = async (req, res) => {
   try {
    const {id} = req.params;
    const delete_Personaje = await Personaje.findByPk(id);
    if(delete_Personaje==null) {
        res.status(404).json({
            message: 'Personaje no encontrado'
        })
    } else {
        await delete_Personaje.destroy();
        res.send(delete_Personaje);
    }
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar el personaje',
        })
    }    
}    