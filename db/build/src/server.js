"use strict";
const express = require('express');
const morgan = require('morgan');
const starWarsDbServer = express();
starWarsDbServer.use(express.json());
starWarsDbServer.use(morgan('dev'));
starWarsDbServer.use(require('./router'));
starWarsDbServer.use('*', (_req, res) => {
    res.status(404).send('Not found');
});
starWarsDbServer.use((err, _req, res, _next) => {
    res.status(500).send(err.message);
});
module.exports = starWarsDbServer;
