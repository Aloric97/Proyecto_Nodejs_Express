//importaciones de librerias javascript
import express from 'express';
import bodyParser from 'body-parser';


//Importaciones de archivos locales creados
import {sequelize} from './database/database.js';
import './models/genero.js'
import './models/pelicula.js'
import './models/personaje.js'
import './database/asociations.js';
import PersonajeRouter from './routes/personaje.routes.js';
import UsuarioRouter from './routes/registroylogin.routes.js';
import './models/usuario.js';


const app = express();

app.use(express.json()) //middleware para convertir peticiones a json y lo guarda en un request.body
app.use(express.urlencoded({ extended: false }));

app.use(UsuarioRouter);
app.use(PersonajeRouter);



async function main() {  // creamos la funcion para ejecutarlo como un metodo al final. creamos codigo asincrono para poder decir que antes de ejecutar el servidor, primero nos conectemos a la base de datos
    try{
        // Conectase a la base de datos
        // Force true: DROP TABLES
        await sequelize.sync(); // hace una sincronizacion con la base de datos, es decir, trata de crear tablas, consultas, etc...
        app.listen(3000);
        console.log('conectado al puerto 3000');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
        
};


main();