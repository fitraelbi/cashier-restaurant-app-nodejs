const express = require("express")
const controller = require("../controller/product")
const route = express.Router()

route.get("/product", controller.all)
route.post("/product", controller.add)
route.put("/product", controller.edit)
route.delete("/product", controller.delete)

route.get("/product/search", controller.search)

route.get("/product/orderbyname", controller.orderbyname)
route.get("/product/orderbycategory", controller.orderbycategory)
route.get("/product/orderbynew", controller.orderbynew)
route.get("/product/orderbyprice", controller.orderbyprice)


module.exports = route