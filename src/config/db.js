const Pool = require('pg-pool')

const mydb = new Pool({
    user : "lol",
    database : "cashier-restaurant",
    password : "12341234",
    host : "localhost"
})

module.exports = mydb