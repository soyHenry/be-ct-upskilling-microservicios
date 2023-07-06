const { Schema: CharSchema } = require('mongoose')

const CharactersSchema = new CharSchema({
    _id: { type: String },
    name: { type: String },
    height: { type: String },
    mass: { type: String },
    hair_color: { type: String },
    skin_color: {
        type: String,
        enum: [
            'fair',
            'gold',
            'white',
            'blue',
            'light',
            'red',
            'unknown',
            'green',
            'green-tan',
            'brown',
            'pale',
            'metal',
            'dark',
            'brown mottle',
            'grey',
            'mottled green',
            'orange',
            'yellow',
            'tan',
            'silver'
        ]
    },
    eye_color: { type: String },
    birth_year: { type: Date },
    gender: { type: String, enum: ['male', 'female', 'hermaphrodite', 'none', 'n/a'] },
    homeworld: { type: String, ref: 'planets' },
    films: [{ type: String, ref: 'films' }]
})

module.exports = CharactersSchema