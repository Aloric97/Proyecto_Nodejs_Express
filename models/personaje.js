import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';



// tabla personaje con los campos id, image,nombre,historia
export const Personaje = sequelize.define('personajes',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    images:{
        type: DataTypes.STRING
    },

    nombre:{
        type: DataTypes.STRING
    },
    edad:{
        type: DataTypes.INTEGER,
        validate:{
            isInt: {
                args: true,
                msg: "La edad tiene que ser un numero"
            },
            min: {
                args: 1, 
                msg: "La edad tiene que ser mayor o igual que uno"
            },
            max: {
                args: 150,
                msg: "La edad tiene que ser real"  
            }
        },
    },
    peso: {
        type: DataTypes.INTEGER,

        validate:{
            isInt: {
                args: true,
                msg: "El peso tiene que ser un numero"
            },
            min: {
                args: 1,
                msg: "El peso tiene que ser mayor o igual que uno"
            }
       }
    },
    historia:{
        type: DataTypes.TEXT
    },
    
},
    {
    timestamps: false
    });