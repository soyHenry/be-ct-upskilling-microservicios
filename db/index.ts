const starWarsServer = require('./src/server')

require('dotenv').config()

starWarsServer.listen(process.env.DB_PORT, () => {
    console.log(`server started at http://localhost:${process.env.DB_PORT}`)
})
