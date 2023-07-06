const axios = require('axios')

require('dotenv').config()

module.exports = {
    list: async () => {
        console.log(process.env.DATABASE_URL);
        
        return await axios.get(`${process.env.DATABASE_URL}/planets`)
    }
}