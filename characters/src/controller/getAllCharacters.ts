const Characters = require('../data')
let utils = require('../utils')

module.exports = async (_req: any, res: any) => {
    let data = await Characters.list()
    utils.response(res, 200, data.data)
}
