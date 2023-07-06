const mongoose = require('mongoose')
require('dotenv').config()

const conn = mongoose.createConnection(process.env.MONGO_URL)

const Characters = conn.model('characters', require('./schemas/charactersSchema'))
const Planets = conn.model('planets', require('./schemas/planetSchema'))
const Films = conn.model('films', require('./schemas/filmsSchemas'))


module.exports = {
    /* characters */
    characters: {
        getAll: async () => await Characters.find().populate('homeworld', ['_id', 'name']).populate('films', ['_id', 'title']),
    },

    /* planets */
    planets: {
        getAll: async () => await Planets.find().populate('films', ['_id', 'title'])
    },

    /* films */
    films: {
        getAll: async () => await Films.find().populate('characters', ['_id', 'name']).populate('planets', ['_id', 'name'])
    }
}
