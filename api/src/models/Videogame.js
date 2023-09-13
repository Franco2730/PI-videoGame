const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID, // id tipo: 9525gg639b - 54f8s6k2s1 - 95dddd1ag89
      defaultValue: DataTypes.UUIDV4, //Genera dicho id de forma automatica tras la creación de un nuevo videojuego
      primaryKey: true,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    platforms: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    image: {
      type: DataTypes.TEXT,
      // allowNull: false
    },

    releaseDate: {
      type: DataTypes.STRING,
      allowNull: false
    },

    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

  });
};
