import Sequelize from 'sequelize';

export const sequelize = new Sequelize (
    'Disney',
    'postgres',
    '123456', 
        {
            host: 'localhost',
            dialect: 'postgres',
        }
);

