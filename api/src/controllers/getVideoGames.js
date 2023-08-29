const { Router } = require( "express" );
const { Videogame } = require ("../db");
const { DB_API } = process.env;
const axios = require("axios");
require("dotenv").config();

// console.log(process.env.DB_API);
// console.log(DB_API);
// console.log("Error: DB_API not found");


const getVideoGames = async (req, res) => {


    try {
        const { data } = await axios.get(`http://api.raw.io/api/games?key=${DB_API}`)    
        const apiVideoGames = data.results
        res.status(200).json(apiVideoGames);

    } catch (error) {
        console.log(("Error:", error));
        res.status(500).json({ error: "could't get info from the api" })
    }
}

module.exports = getVideoGames