require("dotenv").config();
const { DB_API } = process.env;
const { Videogame, Genre } = require ("../db");
const axios = require("axios");

// console.log(process.env.DB_API);
// console.log(DB_API);
// console.log("Error: DB_API not found");


const getVideogames = async (req, res) => {

    try {

        // Busco todos los usuarios de la base de datos
        const databaseVideogames = await Videogame.findAll({
            include: {
                model: Genre,
                attributes: ["Genero"],
                through: { attributes: [] },
            },
        })    

        //Acá hay algo mal, buscar en el video de back numero 2 (martes) que pasó Nicolas Burgueño.. Hay que buscar los users desde la api....!!!

        //-----------=>
        const apiVideoGames = data.results
        
        const allVideogames = [...databaseVideogames, ...apiVideoGames];

        res.status(200).json(apiVideoGames);

    } catch (error) {
        console.log(("Error:", error));
        res.status(500).json({ error: "could't get info from the api" })
    }
}

module.exports = getVideoGames