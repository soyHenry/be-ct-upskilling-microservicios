const { Router: FilmsRouter } = require("express");

let filmsRouter = FilmsRouter()

let { films } = require('../../database/index')

filmsRouter.get('/', async (_req: any, res: any) => res.status(200).json(await films.getAll()))

filmsRouter.get('/detail/:id', async (req: any, res: any) => {
    let { id } = req.params
    res.status(200).json(await films.getById(id))
})

module.exports = filmsRouter