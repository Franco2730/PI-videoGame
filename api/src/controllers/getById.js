const { Videogame, Genre } = require ("../db"); 
const axios = require ('axios');
require("dotenv").config();
const { DB_API } = process.env;

const removeHTMLTags = (text) => {
    // Expresión regular para buscar y eliminar las etiquetas HTML.
    const regex = /(<([^>]+)>)/gi;
    return text.replace(regex, "");
  };

const getById = async (req, res) => {
    const { id } = req.params
    try {

        // busco en la bdd si el id es uuid
    if (isNaN(id)) {
        const dbVideogame = await Videogame.findByPk(id, { //findByPk es = encontrar por primary key
          include: {
            model: Genre,
            attributes: ["name"],
            through: { attributes: [] },
          },
        });

        const dbFiltered = {
            id: dbVideogame.id,
            Nombre: dbVideogame.name,
            Plataformas: dbVideogame.platforms,
            Descripcion: dbVideogame.description,
            FechaLanzamiento: dbVideogame.releaseDate,
            Rating: dbVideogame.rating,
            Generos: dbVideogame.Genres.map((g) => g.name).join(", "),
            Imagen: dbVideogame.image
        };

        if (!dbVideogame) {
          res.status(404).send("No se escuentra en la base de datos");
        } else return res.status(200).json(dbFiltered);}
        //Si no ingresa ya que el id es numerico.. 

    else {
      const { data } = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${DB_API}`
      )
      const videogameByID = {
        id: data.id,
        Nombre: data.name,
        Plataformas: data.platforms?.map((p) => p.platform.name).join(", "),
        Descripcion: removeHTMLTags(data.description),
        FechaLanzamiento: data.released,
        Rating: data.rating,
        Generos: data.genres?.map((g) => g.name).join(", "),
        Imagen: data.background_image,
      };
      res.status(200).json(videogameByID);
    };


    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};


module.exports = { getById };

