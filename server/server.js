const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const routes = require('./routes/index.routes.js');

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors())
app.use(fileUpload());
app.use('/api',routes);

  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );

//start app 
app.listen(PORT,()=>console.log(`🚀 S3 Server is Running http://localhost:${PORT}/`))