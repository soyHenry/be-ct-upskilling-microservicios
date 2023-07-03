"use strict";
const { Router } = require("express");
const charactersConstroller = require("../controller/index");
const middleware = require('../middlewares');
const charactersRouter = Router();
charactersRouter.get('/', charactersConstroller.getAllCharacters);
charactersRouter.post('/', middleware.characterValidation, charactersConstroller.createCharacter);
module.exports = charactersRouter;
