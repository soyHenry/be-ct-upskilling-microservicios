const { Router: CharacterRouter } = require("express");

let characterRouter = CharacterRouter()

let { characters } = require('../../database/index')

characterRouter.get('/', async (_req: any, res: any) => res.status(200).json(await characters.getAll()))

characterRouter.get('/detail/:id', async (req: any, res: any) => {
    let { id } = req.params
    res.status(200).json(await characters.getById(id))
})

module.exports = characterRouter