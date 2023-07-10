const express = require('express')
const morgan = require('morgan')

const starWarsDbServer = express();

starWarsDbServer.use(express.json());
starWarsDbServer.use(morgan('dev'));

starWarsDbServer.use(require('./router'))

starWarsDbServer.use('*', (_req: any, res: any) => {
    res.status(404).send('Not found')
})

starWarsDbServer.use((err: any, _req: any, res: any, _next: any) => {
    res.status(500).json({
        error: true,
        message: err.message
    })
})


module.exports = starWarsDbServer