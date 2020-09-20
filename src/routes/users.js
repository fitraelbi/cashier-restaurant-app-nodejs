const express = require("express")
const controller = require("../controller/users")
const Route = express.Router()

Route.get("/user", controller.all)
Route.post("/user", controller.add)
Route.put("/user", controller.edit)
Route.delete("/user", controller.delete)

module.exports = Route