import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';


// tabla genero con los campos id,nombre,imagen
export const Genero = sequelize.define('generos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
        Validate:{
            length: {
                args: [1,50],
                msg: "El nombre tiene que tener entre 1 y 50 caracteres"
            }
        }
    },
    image: {
        type: DataTypes.STRING
    }},
        {
        timestamps: false
        }
);
