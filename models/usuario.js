import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const usuarios = sequelize.define('usuarios', {
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
    }});