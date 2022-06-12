import { Router } from "express";
import {getPersonajes, createPersonaje} from '../controllers/personaje.Controller.js';


const router= Router();

router.get('/personajes', getPersonajes) //obtener todos los personajes de la llamada al controlador creado desde el archivo personaje.Controller.js
router.post('/personajes', createPersonaje) //crear un nuevo personaje de la llamada al controlador creado desde el archivo personaje.Controller.js
router.put('/personajes/:id') //actualizar un personaje
router.delete('/personajes/:id') //eliminar un personaje
router.get('/personajes/:id') //obtener un personaje


export default router;