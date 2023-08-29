const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js'); 
const getVideoGames = require('../controllers/getVideoGames');




const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



router.get("/videogames", getVideoGames )


module.exports = router;




// modularizar las rutas de videgames, esto se logrará teniendo todas las rutas en un archivo aparte. 

// La linea 27 de app.js establece como utilizar un archivo de ruta externo, esto es lo que queremos lograr en el archivo de index. basicamente tener un archivo de rutas exclusivo para videgames y que aun el server lo pueda utilizar.  