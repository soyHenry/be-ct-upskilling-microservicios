const axios = require('axios')

require('dotenv').config()

module.exports = {
    list: async () => {
        return await axios.get(`${process.env.DATABASE_URL}/planets`)
    },
    detail: async (id: any) => {
        return await axios.get(`${process.env.DATABASE_URL}/planets/${id}`)
    }
}