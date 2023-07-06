const Films = require('../data/index')
let utils = require('../utils')

module.exports = async (_req: any, res: any) => {
    let data = await Films.list()
    utils.response(res, 200, data.data)
}