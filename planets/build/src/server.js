"use strict";
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const starWarsPlanetServer = express();
starWarsPlanetServer.use(express.json());
starWarsPlanetServer.use(morgan('dev'));
starWarsPlanetServer.use('/planets', require('./router'));
starWarsPlanetServer.use('*', (_req, res) => {
    res.status(404).send('Not found');
});
starWarsPlanetServer.use((err, _req, res, _next) => {
    res.status(500).send(err.message);
});
module.exports = starWarsPlanetServer;
