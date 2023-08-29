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
        });

        //Acá hay algo mal, buscar en el video de back numero 2 (martes) que pasó Nicolas Burgueño.. Hay que buscar los users desde la api....!!!

        const { data } = await axios.getAdapter(
            `https://api.rawg.io/api/games?key=${DB_API}&page_size=100`
        );

        const apiVideoGames = data.results
        
        const allVideogames = [...databaseVideogames, ...apiVideoGames];

        res.status(200).json(allVideogames);

    } catch (error) {

        res.status(400).json({ error: error.message });
    }
};

module.exports = getVideogames;