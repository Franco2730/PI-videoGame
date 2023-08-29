require("dotenv").config();
const { DB_API } = process.env;
const axios = require("axios");
const { Videogame, Genre } = require("../db");

const getVideoGames = async (req, res) => {
    try {
        //Busco todos los users de la base de datos:
        const databaseVideogames = await Videogame.findAll({
            include:{
                model: Genre,
                attributes: ["Genero"],
                through: { attributes: [] },
            },
        });

        //A diferencia de lo anterior, ahora los buscaremos en la api.
        const { data } = await axios.getAdapter(
            `https://api.rawg.io/api/games?key=${DB_API}&page_size=100`
        );
        const apiVideogames = data.results;

        const allVideogames = [ ...databaseVideogames, ...apiVideogames ];

        res.status(200).json(allVideogames);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};
module.exports = getVideoGames;