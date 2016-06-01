
var express = require('express');
var app = express();
var apiRouter = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoURI = process.env.MONGOLAB_URI;
// var multer = require('multer');
// var upload = multer()
require('dotenv').config();

// var multiparty = require('connect-multiparty'),
//     multipartyMiddleware = multiparty();

mongoose.connect(process.env.MONGOLAB_URI);

require('./routes/email-route')(apiRouter);
require('./routes/addHomes-route')(apiRouter);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type, token, authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use(bodyParser.json());
// app.use('/', multipartyMiddleware, apiRouter);
// app.use('/', multer({dest:'./uploads/'}).single('singleInputFileName'), apiRouter);
app.use('/', apiRouter);


app.listen(process.env.PORT || 3000, function() {
  console.log('Server started on port 3000');
});
