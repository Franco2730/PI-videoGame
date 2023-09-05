const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js'); 
const { getVideogames } = require('../controllers/getVideoGames');
const { getById } = require('../controllers/getById');
const { newVideogame } = require('../controllers/newVideogame');
const { getGenres } = require('../controllers/getGenres');
const router = Router();





// Configurar los routers 

router.get("/videogames", getVideogames);
router.get("/videogames/:id", getById);
router.post("/videogames", newVideogame);
router.get("/genres", getGenres);


module.exports = router;




// modularizar las rutas de videgames, esto se logrará teniendo todas las rutas en un archivo aparte. 

// La linea 27 de app.js establece como utilizar un archivo de ruta externo, esto es lo que queremos lograr en el archivo de index. basicamente tener un archivo de rutas exclusivo para videgames y que aun el server lo pueda utilizar.  