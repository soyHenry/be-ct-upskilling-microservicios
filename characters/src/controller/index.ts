const { cachedAsync } = require('../utils')
const Characters = require('../data')
let { response } = require('../utils')

module.exports = {
    getAllCharacters: cachedAsync(async (_req: any, res: any) => {
        let data = await Characters.list()
        response(res, 200, data.data)
    }),

    getDetailCharacter: cachedAsync(async (req: any, res: any) => {
        let { id } = req.params
        let data = await Characters.detail(id)
        response(res, 200, data.data)
    }),
}