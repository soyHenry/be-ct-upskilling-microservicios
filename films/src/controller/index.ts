const { cachedAsync } = require('../utils')

module.exports = {
    getAllFilms: cachedAsync(require('./getAllFilms'))
}