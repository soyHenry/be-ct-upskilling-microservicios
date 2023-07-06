const express = require('express');
const morgan = require('morgan');
require('dotenv').config()

const starWarsFilmsServer = express();

starWarsFilmsServer.use(express.json());
starWarsFilmsServer.use(morgan('dev'));

starWarsFilmsServer.use('/films', require('./router'))

starWarsFilmsServer.use('*', (_req: any, res: any) => {
    res.status(404).send('Not found')
})

starWarsFilmsServer.use((err: any, _req: any, res: any, _next: any) => {
    res.status(500).send(err.message)
})


module.exports = starWarsFilmsServer