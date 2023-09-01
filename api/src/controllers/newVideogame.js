const { Videogame, Genre } = require("../db");

const newVideogame = async (req, res) => {
    const {
        name,
        description,
        platforms,
        image,
        releaseDate,
        rating,
        Genero,
    } = req.body;

    try {
        
        const newVideogame = await Videogame.create({
        name,
        description,
        platforms,
        image,
        releaseDate,
        rating,
        });
        Genero.forEach(async (g) => {
            let genresDB = await Genre.findAll({ where: { name: g } });
            await newVideogame.addGenre(genresDB);
        });

        res.status(201).json(newVideogame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
};

module.exports = {newVideogame};