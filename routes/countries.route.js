const express = require('express');
const router = express.Router();

const countries = require('./../mockups/countries.mockup.json');

const RouteController = require('./../controllers/route.controller');
const CountryController = require('./../controllers/country.controller');

router.get('/', (req, res) => {
    res.send(countries);
});

router.get('/population', (req, res) => {
    let min = req.query.min;
    let max = req.query.max;

    if (min && max) {
        let countriesResult = CountryController.getByPopulation(min, max);
        CountryController.checkCountriesAndResponse(countriesResult, res);
    } else {
        RouteController.error(res, 'You need to require min and max');
    }
});

router.get('/area', (req, res) => {
    let min = req.query.min;
    let max = req.query.max;

    if (min && max) {
        let countriesResult = CountryController.getByArea(min, max);
        CountryController.checkCountriesAndResponse(countriesResult, res);
    } else {
        RouteController.error(res, 'You need to require min and max');
    }
});

router.get('/globalstats', (req, res) => {
    let minArea = req.query.minarea;
    let maxArea = req.query.maxarea;
    let minPop = req.query.minpop;
    let maxPop = req.query.maxpop;

    if (minArea && maxArea && minPop && maxPop) {
        let countriesResult = CountryController.getByPopulationAndArea(
            minArea, maxArea, minPop, maxPop
        );
        CountryController.checkCountriesAndResponse(countriesResult, res);
    } else {
        RouteController.error(res, 'You need to require minarea and maxarea and minpop and maxpop');
    }
});

router.get('/borders/:country', (req, res) => {
    let countryName = req.params.country;

    if (countryName) {
        let borders = CountryController.getBordersByCountry(countryName);

        if (borders.length) {
            res.send(borders);
        } else {
            res.send('No borders found');
        }
    } else {
        RouteController.error(res, 'You need to require country');
    }
});

router.get('/maxlang', (req, res) => {
    let country = CountryController.getMaxLang();

    if (country) {
        res.send(country);
    } else {
        RouteController.error(res, 'No result');
    }
});

router.get('/capital/:name', (req, res) => {
    let capitalName = req.params.name;

    if (capitalName) {
        let countriesResult = CountryController.getCountriesByCapital(capitalName);
        CountryController.checkCountriesAndResponse(countriesResult, res);
    } else {
        RouteController.error(res, 'You need to require capital name');
    }
});

router.get('/timezones', (req, res) => {
    let utcMin = req.query.utcmin;
    let utcMax = req.query.utcmax;

    if (utcMin && utcMax) {
        let countriesResult = CountryController.getCountriesByTimezone(utcMin, utcMax);
        CountryController.checkCountriesAndResponse(countriesResult, res);
    } else {
        RouteController.error(res, 'You need to require utcmin and utcmax');
    }
});

router.get('/latlng', (req, res) => {
    let topLeftX = req.query.topleftx;
    let topLeftY = req.query.toplefty;
    let bottomRightX = req.query.bottomrightx;
    let bottomRightY = req.query.bottomrighty;

    if (topLeftX && topLeftY && bottomRightX && bottomRightY) {
        let countriesResult = CountryController.getCountriesByLatLng(topLeftX, topLeftY, bottomRightX, bottomRightY);
        CountryController.checkCountriesAndResponse(countriesResult, res);
    } else {
        RouteController.error(res, 'You need to require topleftx toplefty bottomrightx bottomrighty');
    }
});

router.get('/callingcode/:code', (req, res) => {
    let codeLength = req.params.code;

    if (codeLength) {
        let countriesResult = CountryController.getCountriesByCode(codeLength);
        CountryController.checkCountriesAndResponse(countriesResult, res);
    } else {
        RouteController.error(res, 'You need to require code');
    }
});

module.exports = router;
