import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';


export const Personaje_Pelicula = sequelize.define('personajes_peliculas',
{},
    {
        timestamp: false,
        createdAt: false,
        updatedAt: false
    },
        
);