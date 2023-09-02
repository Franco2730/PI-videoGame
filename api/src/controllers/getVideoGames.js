require("dotenv").config();
const { DB_API } = process.env;
const { Videogame, Genre } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

const getVideogames = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      //Busco en la bdd
      const dbByname = await Videogame.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`, //operador de: si incluye "%"... recordatorio: video 3 back. 1hs:22m
          },
        },
        include: {
          model: Genre,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });
      //Busco en la api 
      const { data } = await axios.get(
        `https://api.rawg.io/api/games?key=${DB_API}&search=${name}`
      );
      const apiByName = data.results.map((videogame) => {
        return {
          id: videogame.id,
          name: videogame.name,
          background_image: videogame.background_image,
          genres: videogame.genres,
        };
      });

      const videogameByName = [...dbByname, ...apiByName];
      if (videogameByName.length === 0) {
        throw Error("No se encontro el juego");
      }
      // Controlar la cantidad de resultados para no exceder 15 videojuegos
      if (videogameByName.length > 15) {
        const videogameByNameSliced = videogameByName.slice(0, 15);
        return res.status(200).json(videogameByNameSliced);
      }
      return res.status(200).json(videogameByName);
    }

    // Busco todos los videogames de la base de datos.
    const databaseVideogames = await Videogame.findAll({
      //fineAll trae todos los modelos.
      include: {
        //Este es el que trae los generos.
        model: Genre,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    //Acá hay algo mal, buscar en el video de back numero 2 (martes) que pasó Nicolas Burgueño.. Hay que buscar los users desde la api....!!!

    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${DB_API}&page_size=100`
    );

    const apiVideoGames = data.results.map((game) => ({
      id: game.id,
      name: game.name,
      image: game.background_image,
      genre: game.genres.map((genero) => genero.name).join(", "),
    }));

    const allVideogames = [...databaseVideogames, ...apiVideoGames];

    res.status(200).json(allVideogames);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getVideogames };
