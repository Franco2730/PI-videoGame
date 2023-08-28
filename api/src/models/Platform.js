const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('platform', {
    id: {
      type: DataTypes.INTEGER, //Establece el tipo de columna id.
      primaryKey: true,
      autoIncrement: true, 
      allowNull: false
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
      validate: {
        isAlpha: true //Solo letras. No permite nada más.
      }
    },
  });
};

