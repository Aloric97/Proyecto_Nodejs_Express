import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Usuario = sequelize.define('usuarios', {
    nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
           len:{
                args: [3,50],
                msg: "El nombre debe tener entre 3 y 50 caracteres"
           }
           
        }

    },
    contrasenia: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
           len: {
                args: [3,255],
                msg: "La contraseña debe tener entre 3 y 50 caracteres"
           }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'El email no es valido'
            }
        }
    }
},
    {
    timestamps: false,
    updatedAt: false,
    createdAt: false
    });
