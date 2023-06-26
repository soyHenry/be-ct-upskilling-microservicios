const films = require('../data/films.json')

const getAllFilms = (req, res) => {
    res.json(films)
}

module.exports = {
    getAllFilms
}