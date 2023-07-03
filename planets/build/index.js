"use strict";
const starWarsServer = require('./src/server');
require('dotenv').config();
starWarsServer.listen(process.env.PLANETS_PORT, () => {
    console.log(`server started at http://localhost:${process.env.PLANETS_PORT}`);
});
