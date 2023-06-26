const characters = require('../data/characters.json')

const getAllCharacters = (req, res) => {
    res.json(characters)
}

module.exports = {
    getAllCharacters
}