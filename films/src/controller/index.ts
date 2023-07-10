const { cachedAsync } = require('../utils')
const Films = require('../data/index')
let { response } = require('../utils')

module.exports = {
    getAllFilms: cachedAsync(async (_req: any, res: any) => {
        let data = await Films.list()
        response(res, 200, data.data)
    }),
    getDetailFilm: cachedAsync(async (req: any, res: any) => {
        let { id } = req.params
        let data = await Films.detail(id)
        response(res, 200, data.data)
    }),
}