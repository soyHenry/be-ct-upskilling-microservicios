const { Router: PlanetsRouter } = require("express");

let planetsRouter = PlanetsRouter()

let { planets } = require('../../database/index')

planetsRouter.get('/', async (_req: any, res: any) => res.status(200).json(await planets.getAll()))

planetsRouter.get('/detail/:id', async (req: any, res: any) => {
    let { id } = req.params
    res.status(200).json(await planets.getById(id))
})

module.exports = planetsRouter