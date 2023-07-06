"use strict";
module.exports = (res, status, data) => {
    res.status(status).json({
        error: false,
        data
    });
};
