const contentModels = require('../../database/index')
module.exports = (req: any, _res: any, next: any) => {
    let { model } = req.params;
    if (contentModels[model]) next()
    else throw Error(`there is no model called ${model}`)
}