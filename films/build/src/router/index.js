"use strict";
const { Router } = require("express");
const filmsController = require("../controller");
const filmsRouter = Router();
filmsRouter.get('/', filmsController.getAllFilms);
filmsRouter.get('/:id', filmsController.getDetailFilm);
module.exports = filmsRouter;
