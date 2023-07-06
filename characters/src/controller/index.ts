const { cachedAsync } = require('../utils')

module.exports = {
    getAllCharacters: cachedAsync(require('./getAllCharacters')),
    createCharacter: cachedAsync(require('./createCharacter'))
}