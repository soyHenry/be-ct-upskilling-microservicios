"use strict";
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const starWarsFilmsServer = express();
starWarsFilmsServer.use(express.json());
starWarsFilmsServer.use(morgan('dev'));
starWarsFilmsServer.use('/films', require('./router'));
starWarsFilmsServer.use('*', (_req, res) => {
    res.status(404).send('Not found');
});
starWarsFilmsServer.use((err, _req, res, _next) => {
    res.status(500).send(err.message);
});
module.exports = starWarsFilmsServer;
