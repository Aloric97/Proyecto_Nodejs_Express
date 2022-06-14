import { Router } from "express";
import {getPersonajes, createPersonaje,updatePersonaje,deletePersonaje } from '../controllers/personaje.Controller.js';


const router= Router();

router.get('/personajes', getPersonajes) //obtener todos los personajes de la llamada al controlador creado desde el archivo personaje.Controller.js
router.post('/personajes', createPersonaje) //crear un nuevo personaje de la llamada al controlador creado desde el archivo personaje.Controller.js
router.put('/personajes/:id',updatePersonaje) //actualizar un personaje por su id
router.delete('/personajes/:id',deletePersonaje) //eliminar un personaje por su id
router.get('/personajes/:id') //obtener un personaje


export default router;