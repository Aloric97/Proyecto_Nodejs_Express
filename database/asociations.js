import {Genero} from '../models/genero.js';
import {Pelicula} from '../models/pelicula.js';
import {Personaje} from '../models/personaje.js';
import {Personaje_Pelicula} from '../models/personaje_pelicula.js';

// muchos a muchos
// El personaje pertenezca a varias peliculas
// Esto crear una nueva tabla en la base de datos llamada personaje_pelicula
// La tabla personaje_pelicula tendra dos campos:

Pelicula.belongsToMany(Personaje, {
    through: Personaje_Pelicula, 
    as: "peliculas", 
});


Personaje.belongsToMany(Pelicula, {
    through: Personaje_Pelicula, 
    as: "personajes", 
});


// 1 a muchos
// pelicula puede a tener muchos generos
// Se añade una clave peliculaId a la tabla genero
Pelicula.hasMany(Pelicula, 
    { as: "Pelicula", 
    foreignKey: "peliculaId" ,
    sourceKey:"id"
    }
); // con esto, declaramos que una pelicula tiene 1 o varios generos

// Se añade una clave pelicula a la tabla pelicula

Genero.belongsTo(Genero, 
    {as:"generos",
    foreignKey: "peliculaId" ,
    targetid: "id"
    }
); // con esto decimos que varias generos pertenecen a una pelicula