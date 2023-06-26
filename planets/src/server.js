const express = require('express');
const morgan = require('morgan');
require('dotenv').config()

const starWarsServer = express();

starWarsServer.use(express.json());
starWarsServer.use(morgan('dev'));

starWarsServer.use(require('./router'))

module.exports = starWarsServer