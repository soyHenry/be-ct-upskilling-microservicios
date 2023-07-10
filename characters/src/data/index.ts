const axios = require('axios')

require('dotenv').config()

module.exports = {
    list: async () => {
        return await axios.get(`${process.env.DATABASE_URL}/characters`)
    },
    detail: async (id: any) => {
        return await axios.get(`${process.env.DATABASE_URL}/characters/${id}`)
    }
}