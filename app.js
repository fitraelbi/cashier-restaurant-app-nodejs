require('dotenv/config')
const express = require('express')
const bodyParser = require('body-parser')
const db = require("./src/config/db")
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')
const moment = require('moment-timezone');

let cors = require('cors')

const routes = require("./src/main")

var accessLogStream = fs.createWriteStream(path.join(__dirname, '/log/access.log'), { flags: 'a' })

const app = express()

app.use(cors())


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

morgan.token('date', (req, res, tz) => {
    return moment().tz(tz).format();
  })
morgan.format('myformat', '[:date[Asia/Jakarta]] ":method :url" :status :res[content-length] - :response-time ms');
app.use(morgan('myformat', { stream: accessLogStream }))

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