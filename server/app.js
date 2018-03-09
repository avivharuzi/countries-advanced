const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const countriesRoute = require('./routes/countries.route');
const favoritesRoute = require('./routes/favorites.route');
const authRoute = require('./routes/auth.route');

const port = process.env.PORT || 3000;
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use('/', authRoute);
app.use('/api/countries', countriesRoute);
app.use('/api/favorites', favoritesRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
