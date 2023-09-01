const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID, //Establece el tipo de columna id.
      defaultValue: DataTypes.UUIDV4, //El valor por defecto
      primaryKey: true,
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
      validate: {
        isAlpha: true
      }
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
      allowNull: false
    },

    releaseDate: {
      type: DataTypes.STRING,
      allowNull: false
    },

    rating: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

  });
};
