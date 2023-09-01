const { Genre } = require ("../db"); 
const axios = require ('axios');
require("dotenv").config();
const { DB_API } = process.env;

const getGenres = async (req, res) => {
    try {
        const { data } = await axios.get(
          `https://api.rawg.io/api/genres?key=${DB_API}`
        );
    
        const genres = data.results;
        const genresFilteres = genres?.map((genre) => genre.name);
        
        genresFilteres.forEach(async (g) => {
            await Genre.findOrCreate({
                where: {
          name: g,
        },
    });
});
const allGenres = await Genre.findAll();
res.json(allGenres); //da la peticion

}catch(
    error
){res.status(400).json({ error: error.message })}
}

module.exports = { getGenres };