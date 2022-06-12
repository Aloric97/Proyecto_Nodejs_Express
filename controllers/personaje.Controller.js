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



export const getPersonajes = async (req, res) => { //asincrono porque esta haciendo una consulta a la base de datos
    const personajes = await Personaje.findAll();
    console.log(personajes);
}

export const createPersonaje = async (req, res) => {
    const {nombre, edad, peso, historia} = req.body;
    const newPersonaje= await Personaje.create({  //asincrono porque esta guardando una consulta a la base de datos
    nombre,
    edad,
    peso,
    historia
    });
    console.log(newPersonaje);
    
    res.send('creando un personaje');
    
}

