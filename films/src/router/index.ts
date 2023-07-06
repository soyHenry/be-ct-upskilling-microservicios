const { Router } = require("express");
const filmsController = require("../controller");

const filmsRouter = Router()

filmsRouter.get('/', filmsController.getAllFilms)

module.exports = filmsRouter