const express = require("express")
const controller = require("../controller/history")
const Route = express.Router()

Route.get("/history", controller.all)
Route.post("/history", controller.add)
Route.put("/history", controller.edit)
Route.delete("/history", controller.delete)

module.exports = Route