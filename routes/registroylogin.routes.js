// rutas de registo y login

//importar modulo router
import { Router } from "express";

// importar controllers
import { signIn, signUp } from '../controllers/auth.Controller.js';

const router= Router();

router.post('/signin', signIn) //login
router.post('/signup', signUp) //registro

export default router;