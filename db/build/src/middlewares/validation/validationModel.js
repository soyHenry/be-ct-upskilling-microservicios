"use strict";
const contentModels = require('../../database/index');
module.exports = (req, _res, next) => {
    let { model } = req.params;
    if (contentModels[model])
        next();
    else
        throw Error(`there is no model called ${model}`);
};
