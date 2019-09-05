require('dotenv').config()
require('./database')
const express = require('express')

const app = express()
app.use(express.json())

require('./routes/api')(app)

app.listen(process.env.PORT)
