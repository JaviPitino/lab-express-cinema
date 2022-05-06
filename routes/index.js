const express = require('express');
const MovieModel = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {

    MovieModel.find()
    .then((response) => {
        res.render("movies.hbs", {
            movieList: response
        })
    })
    .catch((err) => {
        console.log(err)
    })


})

module.exports = router;
