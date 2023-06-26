const planets = require('../data/planets.json')

const getAllPlanets = (req, res) => {
    res.json(planets)
}


module.exports = {
    getAllPlanets
}