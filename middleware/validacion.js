import jwt from 'jsonwebtoken';

// middleware para validar el token
export const validarToken = (req, res, next) => {
    // obtenemos el token del header
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            error:"Acceso denegado"
    })};
    // verificamos el token
    try {
        const { usuario } = jwt.verify(token, 'prueba12345');
        req.usuario = usuario;
        next(); // si todo sale bien, se continua con la ejecucion del codigo
    } catch (error) {
        res.status(401).json({
            error:"Token no valido"
        })
    }
}
    