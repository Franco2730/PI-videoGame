const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genre', {
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


// https://api.rawg.io/api/genres?key=72f7dfa7bab44468bc6a199154bd7cd4

//Modelos son las tablas de la base de datos.

//Ruta es el camino por el que se recibe y responden los datos.

//controlador es la logica de la ruta.

//flujo el controlador consulta al modelo que con antelación definio sus relaciones y su respuesta es para el enrutador. 

//Al enrutador le llegan datos el consulta al controlador el controlador consulta a los modelos y este consulta a la BD y todo esto se devuelve cuando la BD le dice a los modelos que tiene la información, luego el modelo al controlador y el controlador al enrutador. 