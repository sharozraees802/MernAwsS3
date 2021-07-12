const express = require('express')
const fileupload = require('express-fileupload')
const dotenv = require('dotenv')
const routes = require('./routes/index.routes')

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(fileupload())

app.use('/api',routes)

app.listen(PORT,()=>console.log(`🚀 S3 Server is Running http://localhost:${PORT}/`))
// const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY
// const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY
// const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME

// console.log(AWS_BUCKET_NAME)