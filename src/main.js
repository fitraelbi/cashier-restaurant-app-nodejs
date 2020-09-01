const express = require("express")
const product = require('./routes/product')
const category = require('./routes/category')
const history = require('./routes/history')
const routes = express.Router()

routes.get("/", (req, res) => {
    res.send('Selamat Datang di Backend Cashier-Restaurant-App')
})
routes.use(product)
routes.use(category)
routes.use(history)



module.exports = routes