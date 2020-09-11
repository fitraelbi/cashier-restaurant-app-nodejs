require('dotenv/config')
const express = require('express')
const bodyParser = require('body-parser')
const db = require("./src/config/db")
const morgan = require('morgan')

var cors = require('cors')

const routes = require("./src/main")


const app = express()

app.use(cors())


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(morgan("dev"))

app.use(routes)

db
    .connect()
    .then((result) => {
        console.log("Database connected")
    })
    .catch((err) => {
        console.log("Database not connected")
    })

app.listen(3000, () => {
    console.log(`Service running on port 3000`)
})