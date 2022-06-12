import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Usuario = sequelize.define('usuarios', {
    nombre_usuario: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
    timestamps: false,
    updatedAt: false,
    createdAt: false
    });
