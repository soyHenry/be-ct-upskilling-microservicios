const characters = require('./characters.json')

module.exports = {
    list: async () => {
        return characters
    }
}