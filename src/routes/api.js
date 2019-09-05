const express = require('express')

const api = express.Router()

require('./tools')(api)

module.exports = app => app.use('/api', api)
