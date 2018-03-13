const express = require('express');
const router = express.Router();

const RouteController = require('./../controllers/route.controller');
const favoriteModel = require('./../models/favorite.model');

router.get('/', (req, res) => {
    let id = req.cookies.favorites;
    let fav = favoriteModel.favorites[id];

    if (id && fav) {
        res.send(fav.countries);
    } else {
        RouteController.error(res, 'No favorites found');
    }
});

router.post('/', (req, res) => {
    let id = req.cookies.favorites;
    let fav = favoriteModel.favorites[id];
    let country = req.body.country;

    if (id && fav) {
        let countries = fav.countries;
        countries.push(country);

        res.send({
            response: true,
            message: 'Country added successfully'
        });
    } else {
        RouteController.error(res, 'No favorites found');
    }
});

router.delete('/:country', (req, res) => {
    let id = req.cookies.favorites;
    let fav = favoriteModel.favorites[id];
    let country = req.params.country;

    if (id && fav) {
        let countries = fav.countries;

        for (let i = 0; i < countries.length; i++) {
            if (countries[i] == country) {
                countries.splice(i, 1);
            }
        }

        res.send({
            response: true,
            message: 'Country deleted successfully'
        });
    } else {
        RouteController.error(res, 'No favorites found');
    }
});

module.exports = router;
