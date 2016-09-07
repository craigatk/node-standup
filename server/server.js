const express = require('express');
const Promise = require("bluebird");
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000');
});

app.get('/', function(req, res) {
  res.send('Hello World');
});