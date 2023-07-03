module.exports = (res: any, status: number, data: any) => {
    res.status(status).json({
        error: false,
        data
    })
}