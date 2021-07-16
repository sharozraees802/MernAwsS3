const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const routes = require('./routes/index.routes');

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())
app.use(fileUpload());
app.use('/api',routes);


//start app 
app.listen(PORT,()=>console.log(`🚀 S3 Server is Running http://localhost:${PORT}/`))