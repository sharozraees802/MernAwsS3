const { Router } = require('express')
const { uploadroute } = require('./uploadfile')

const mainroute = Router()

mainroute.use(uploadroute)

module.exports = mainroute


