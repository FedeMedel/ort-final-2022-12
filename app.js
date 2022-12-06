const express = require('express')
const app = express()
require('dotenv').config()
// use json
app.use(express.json())
app.use(express.urlencoded({extended: false}))























app.listen(process.env.PORT)