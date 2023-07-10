const { cachedAsync } = require('../utils')
const Planets = require('../data')
let { response } = require('../utils')

module.exports = {
    getAllPlanets: cachedAsync(async (_req: any, res: any) => {
        let data = await Planets.list()
        response(res, 200, data.data)
    }),
    getDetailPlanet: cachedAsync(async (req: any, res: any) => {
        let { id } = req.params
        let data = await Planets.detail(id)
        response(res, 200, data.data)
    }),
}