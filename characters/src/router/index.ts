const { Router } = require("express");
const charactersConstroller = require("../controller/index");
const middleware = require('../middlewares')

const charactersRouter = Router()

charactersRouter.get('/', charactersConstroller.getAllCharacters)

charactersRouter.get('/:id', charactersConstroller.getDetailCharacter)

module.exports = charactersRouter