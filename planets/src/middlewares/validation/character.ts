module.exports = (req: any, _res: any, next: any) => {
    let { name } = req.body
    if (name) return next()
    else throw new Error('Falta indicar el nombre')
}