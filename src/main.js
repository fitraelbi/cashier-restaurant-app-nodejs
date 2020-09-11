const express = require("express")
const product = require('./routes/product')
const category = require('./routes/category')
const history = require('./routes/history')
const user = require('./routes/users')
const auth = require('./routes/auth')


const routes = express.Router()

routes.get("/", (req, res) => {
    res.send('Selamat Datang di Backend Cashier-Restaurant-App')
})
routes.use(product)
routes.use(category)
routes.use(history)
routes.use(user)
routes.use(auth)



module.exports = routes