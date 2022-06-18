import { Router } from "express";
import {getPersonajes, createPersonaje,updatePersonaje,deletePersonaje,upload, BuscarPorNombre} from '../controllers/personaje.Controller.js';
import { validarToken } from "../middleware/validacion.js";


const router= Router();

router.get('/personajes', validarToken, getPersonajes) //obtener todos los personajes de la llamada al controlador creado desde el archivo personaje.Controller.js
router.post('/personajes', validarToken,upload,createPersonaje) //crear un nuevo personaje de la llamada al controlador creado desde el archivo personaje.Controller.js
router.put('/personajes/:id',updatePersonaje) //actualizar un personaje por su id
router.delete('/personajes/:id',deletePersonaje) //eliminar un personaje por su id
router.get('/personajes/:id') //obtener un personaje por su id
router.get('/personajes/:nombre',BuscarPorNombre) //obtener un personaje por su nombre


export default router;