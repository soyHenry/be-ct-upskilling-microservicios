const starWarsServer = require('./src/server')

require('dotenv').config()

starWarsServer.listen(process.env.FILMS_PORT, () => {
    console.log(`server started at http://localhost:${process.env.FILMS_PORT}`)
})
