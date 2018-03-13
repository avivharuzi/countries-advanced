const express = require('express');
const router = express.Router();

const uuid = require('uuid');

const favoriteModel = require('./../models/favorite.model');

router.use('/', (req, res, next) => {
    if (!req.cookies.favorites && !favoriteModel.favorites[req.cookies.favorites]) {
        let id = uuid.v1();
        favoriteModel.create(id);
        res.cookie('favorites', id);
        req.cookies.favorites = id;
        next();
    } else {
        next();
    }
});

module.exports = router;
