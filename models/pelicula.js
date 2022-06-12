import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';


// tabla pelicula con los campos id,titulo,fecha_creacion,calificacion
export const Pelicula = sequelize.define('peliculas',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo:{
        type: DataTypes.STRING
    },
    fecha_creacion:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    calificacion:{
        type: DataTypes.INTEGER,
        validate:{
            isInt: {
                args: true,
                msg: "La calificacion tiene que ser un numero"
            },
            length: {
                args: [1,5],
                msg: "La calificacion tiene que ser entre 1 y 5"
            }
        }
    }}, 
    {
    timestamps: false
    }
);