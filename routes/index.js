const express = require('express');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {


    // 1. Buscar películas
    MovieModel.find()
    .then((response) => {
        res.render("movies.hbs", {
            movieList: response
        })
    })
    .catch((err) => {
        console.log(err)
    })

    // 2. Vista del usuario por cada peli
    router.get("/movies/:movieId", async (req, res, next) => {
        // 1. Obtener id de las pelis 
        const { movieId } = req.params

        try {
            // 2. Buscar pelis por id
            const respuesta = await MovieModel.findById( movieId )
            console.log(respuesta)

            // 3. Renderizar una vista el usuario con cada peli
            res.render("movie-details.hbs", {
                movieDetails: respuesta
            })
        }
        catch(error) {
            console.log(error)
        }

    })

})

module.exports = router;
