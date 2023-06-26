const { Router } = require("express");
const { getAllCharacters } = require("../controller/getCharacters");

const charactersRouter = Router()

charactersRouter.get('/', getAllCharacters)

module.exports = charactersRouter