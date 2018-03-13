const countries = require('./../mockups/countries.mockup.json');
const RouteController = require('./../controllers/route.controller');

class CountryController {
    static getByArea(min, max) {
        let result = countries.filter(
            country => country.area < max && country.area > min
        );

        return result;
    }

    static getByPopulation(min, max) {
        min = min * 1000000;
        max = max * 1000000;

        let result = countries.filter(
            country => country.population < max && country.population > min
        );

        return result;
    }

    static getByPopulationAndArea(minArea, maxArea, minPop, maxPop) {
        minPop = minPop * 1000000;
        maxPop = maxPop * 1000000;

        let result = countries.filter(
            country => country.population < maxPop && country.population > minPop && country.area < maxArea && country.area > minArea
        );

        return result;
    }

    static getBordersByCountry(countryName) {
        let result = countries.filter(
            country => country.name.toLowerCase() === countryName.toLowerCase()
        )[0];

        if (result && result.borders) {
            return result.borders;
        } else {
            return [];
        }
    }

    static getMaxLang() {
        let result = countries.sort(function (a, b) { return b.languages.length - a.languages.length; })[0];

        return result;
    }

    static getCountriesByCapital(capitalName) {
        let result = countries.filter(
            country => country.capital.toLowerCase().indexOf(capitalName.toLowerCase()) >= 0
        );

        return result
    }

    static getCountriesByTimezone(utcMin, utcMax) {
        let result = countries.filter(
            (country) => {
                for (let timezone of country.timezones) {
                    timezone = timezone.slice(3, 6);
                    timezone = parseInt(timezone);
                    if (timezone < utcMax && timezone > utcMin && timezone !== NaN) {
                        return country;
                    }
                }
            }
        );

        return result
    }

    static getCountriesByLatLng(topLeftX, topLeftY, bottomRightX, bottomRightY) {
        let result = countries.filter(
            (country) => {
                return country.latlng[0] > topLeftX && country.latlng[0] < bottomRightX && country.latlng[1] < topLeftY && country.latlng[1] > bottomRightY
            }
        );

        return result;
    }

    static getCountriesByCode(codeLength) {
        let result = countries.filter(
            (country) => country.callingCodes[0].length == codeLength
        );

        result = result.sort(function (a, b) { return parseInt(a.callingCodes[0]) - parseInt(b.callingCodes[0]); });

        return result;
    }

    static checkCountriesAndResponse(countriesResult, res) {
        if (countriesResult.length) {
            res.send(countriesResult);
        } else {
            RouteController.error(res, 'No countries found');
        }
    }
}

module.exports = CountryController;
