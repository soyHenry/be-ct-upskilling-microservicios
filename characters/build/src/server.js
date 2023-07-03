"use strict";
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const starWarsCharacterServer = express();
starWarsCharacterServer.use(express.json());
starWarsCharacterServer.use(morgan('dev'));
starWarsCharacterServer.use('/characters', require('./router'));
starWarsCharacterServer.use('*', (_req, res) => {
    res.status(404).send('Not found');
});
starWarsCharacterServer.use((err, _req, res, _next) => {
    res.status(500).send(err.message);
});
module.exports = starWarsCharacterServer;
