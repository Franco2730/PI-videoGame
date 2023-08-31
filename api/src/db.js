require('dotenv').config(); //Me permite manejar la informacion que se encuentra en el archivo .ENV
const { Sequelize } = require('sequelize');
const videoGameModel = require('./models/Videogame');
const genreModel = require('./models/Genre');

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env; //Importando todos los datos para la autenticacion en la base de datos. 

const sequelize = new Sequelize( // * Instanciar sequelize y lo guardamos en una variable. 
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/videogames`, //Aca colocamos 
  {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

videoGameModel(sequelize);
genreModel(sequelize);



// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Videogame, Genre } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

  Videogame.belongsToMany(Genre, {through: "Videogame_Genre"})

  Genre.belongsToMany(Videogame, {through: "Videogame_Genre"})



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
