require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const ctrl = require('./controller')
const path = require('path')

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, "../Client")))
// ENDPOINTS

app.listen(SERVER_PORT, ()=> console.log(`up on ${SERVER_PORT}`))