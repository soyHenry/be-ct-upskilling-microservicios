module.exports = (fn: Function) => (req: any, res: any, next: any) => {
    fn(req, res).catch((err: any) => next(err))
}