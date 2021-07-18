const {Router} = require('express')
const {uploadRoute} = require('./uploadFile/index.js');

const mainRoute = Router()
mainRoute.use(uploadRoute)


module.exports = mainRoute