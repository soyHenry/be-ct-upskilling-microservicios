const starWarsServer = require('./src/server')

require('dotenv').config()

starWarsServer.listen(process.env.CHARACTERS_PORT, () => {
    console.log(`server started at http://localhost:${process.env.CHARACTERS_PORT}`)
})
