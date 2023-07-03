"use strict";
module.exports = (fn) => (req, res, next) => {
    fn(req, res).catch((err) => next(err));
};
