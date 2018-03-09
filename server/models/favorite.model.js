let favoriteModel = {};
favoriteModel.favorites = {};

class Favorite {
    constructor() {
        this.countries = [];
    }
}

favoriteModel.create = (id) => {
    let fav = new Favorite();
    favoriteModel.favorites[id] = fav;
}

module.exports = favoriteModel;
