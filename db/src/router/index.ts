const { Router } = require("express");
/* const DbControllers = require("../controller"); */
const DbRouter = Router()
const { validateModel } = require('../middlewares/index')
const store = require('../database/index')

DbRouter.get('/:model', validateModel, async (req: any, res: any) => {
    let { model } = req.params;
    res.status(200).json(await store[model].getAll())
})

DbRouter.get('/:model/:id', validateModel, async (req: any, res: any) => {
    let { model, id } = req.params
    res.status(200).json(await store[model].getById(id))
})

/* DbRouter.use('/characters', require('./subRoutes/charactersRouter'))

DbRouter.use('/films', require('./subRoutes/filmsRouter'))

DbRouter.use('/planets', require('./subRoutes/planetsRouter')) */

module.exports = DbRouter