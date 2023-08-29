require("dotenv").config();
const { DB_API } = process.env;
const { Videogame, Genre } = require ("../db");
const axios = require("axios");



const getVideogames = async (req, res) => {

    try {

        // Busco todos los usuarios de la base de datos
        const databaseVideogames = await Videogame.findAll({
            include: Genre

        });

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

const getGenres = async(req, res) => {
    const count = await Genre.count()
    if( count === 0 ) {
        const { data } = await axios.get(
            `https://api.rawg.io/api/genres?key=${DB_API}`
        );
        const apiRespuesta = data.results

        for( let i = 0; i < apiRespuesta.length; i++ ) {
            let generoCaptado = apiRespuesta.nombre;
        };
    }
}

module.exports = { getVideogames };



// for( let i = 0; i < apiRespuesta.length; i++ ) {
//     let generoCaptado = apiRespuesta.nombre;
// };