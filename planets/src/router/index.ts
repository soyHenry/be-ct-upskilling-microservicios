const { Router } = require("express");
const planetsController = require("../controller");

const planetsRouter = Router()

planetsRouter.get('/', planetsController.getAllPlanets)

module.exports = planetsRouter