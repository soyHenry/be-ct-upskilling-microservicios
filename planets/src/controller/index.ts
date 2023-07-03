const { cachedAsync } = require('../utils')

module.exports = {
    getAllPlanets: cachedAsync(require('./getAllPlanets'))
}