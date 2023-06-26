const { Router } = require("express");
const { getAllFilms } = require("../controller/getFilms");

const filmsRouter = Router()

filmsRouter.get('/', getAllFilms)

module.exports = filmsRouter