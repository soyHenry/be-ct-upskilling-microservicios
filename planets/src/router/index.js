const { Router } = require("express");
const { getAllPlanets } = require("../controller/getPlanets");

const planetsRouter = Router()

planetsRouter.get('/', getAllPlanets)

module.exports = planetsRouter