require('dotenv').config();
const { Sequelize } = require('sequelize');
const videoGameModel = require('./models/Videogame');
const genreModel = require('./models/Genre');

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env; //Importando todos los datos para la autenticacion en la base de datos. 

const sequelize = new Sequelize( // * Instanciar sequelize y lo guardamos en una variable. 
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/videogames`, //Aca colocamos 
  {
  logging: false,
  native: false, 
});

videoGameModel(sequelize);
genreModel(sequelize);



//Antes de hacer las relaciones, debemos traernos los modelos literales (no las funciones como tal).
const { Videogame, Genre } = sequelize.models;



  Videogame.belongsToMany(Genre, {through: "Videogame_Genre"})

  Genre.belongsToMany(Videogame, {through: "Videogame_Genre"})



module.exports = {
  ...sequelize.models, // para poder importar los modelos de sequelize.
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
