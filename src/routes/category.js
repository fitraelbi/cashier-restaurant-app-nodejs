const express = require("express")
const controller = require("../controller/category")
const Route = express.Router()

Route.get("/category", controller.all)
Route.post("/category", controller.add)
Route.put("/category", controller.edit)
Route.delete("/category", controller.delete)

module.exports = Route