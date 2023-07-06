const express = require('express');
const morgan = require('morgan');
require('dotenv').config()

const starWarsCharacterServer = express();

starWarsCharacterServer.use(express.json());
starWarsCharacterServer.use(morgan('dev'));

starWarsCharacterServer.use('/characters', require('./router'))

starWarsCharacterServer.use('*', (_req: any, res: any) => {
    res.status(404).send('Not found')
})

starWarsCharacterServer.use((err: any, _req: any, res: any, _next: any) => {
    res.status(500).send(err.message)
})


module.exports = starWarsCharacterServer