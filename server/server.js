const express = require('express');
const Promise = require("bluebird");
const bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

app.listen(3000, function() {
  console.log('listening on 3000');
});

app.get('/api/', function(req, res) {
  res.send({"msg": "Hello world"});
});

app.post('/api/status', function(req, res) {
  console.log('req', req.body);

  res.send(req.body);
});