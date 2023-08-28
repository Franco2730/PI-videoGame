const { Videogame } = require ("../db"); 

module.exports = async () => {
    const games = await Videogame.findAll()
    return games;
}

//La fn que estoy exportando es asincrona:
//Vamos a awaitear a la instancia del modelo (videogame) consiga todos los registros y retorna la variable que contiene todo. 


