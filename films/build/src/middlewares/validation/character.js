"use strict";
module.exports = (req, _res, next) => {
    let { name } = req.body;
    if (name)
        return next();
    else
        throw new Error('Falta indicar el nombre');
};
