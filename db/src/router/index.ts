const { Router } = require("express");
/* const DbControllers = require("../controller"); */

const dataDb = require('../database/index')

const DbRouter = Router()

DbRouter.get('/characters', async (_req: any, res: any) => res.status(200).json(await dataDb.characters.getAll()))

DbRouter.get('/planets', async (_req: any, res: any) => res.status(200).json(await dataDb.planets.getAll()))

DbRouter.get('/films', async (_req: any, res: any) => res.status(200).json(await dataDb.films.getAll()))

module.exports = DbRouter