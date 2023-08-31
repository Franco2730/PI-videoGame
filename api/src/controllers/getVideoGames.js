require("dotenv").config();
const { DB_API } = process.env;
const { Videogame, Genre } = require ("../db");
const axios = require("axios");


const getVideogames = async (req, res) => {

    try {

        // Busco todos los videogames de la base de datos.
        const databaseVideogames = await Videogame.findAll({ //fineAll trae todos los modelos.
            include: { //Este es el que trae los generos. 
                model: Genre,
                attributes: ["name"],
                through: { attributes: [] },
            },
        });

        //Acá hay algo mal, buscar en el video de back numero 2 (martes) que pasó Nicolas Burgueño.. Hay que buscar los users desde la api....!!!

        const { data } = await axios.get(
            `https://api.rawg.io/api/games?key=${DB_API}&page_size=100`
        );

        const apiVideoGames = data.results.map((game) => ({ id:game.id, name:game.name, image:game.background_image, genre:game.genres.map((genero) => genero.name).join(', ') }))
        
        const allVideogames = [...databaseVideogames, ...apiVideoGames];

        res.status(200).json(allVideogames);

    } catch (error) {

        res.status(400).json({ error: error.message });
    }
};

module.exports = {getVideogames};