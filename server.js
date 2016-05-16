
var express = require('express');
var app = express();
var apiRouter = express.Router();
var bodyParser = require('body-parser');

require('./routes/email-route')(apiRouter)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type, token, authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use(bodyParser.json());
app.use('/', apiRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
