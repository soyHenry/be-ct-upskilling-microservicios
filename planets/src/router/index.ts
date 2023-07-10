const { Router } = require("express");
const planetsController = require("../controller");

const planetsRouter = Router()

planetsRouter.get('/', planetsController.getAllPlanets)

planetsRouter.get('/:id', planetsController.getDetailPlanet)

module.exports = planetsRouter