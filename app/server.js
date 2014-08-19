'use strict';

var express = require('express');
var http = require('http');

var app = express();

app.use(express.static(__dirname + '/../dist'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

var server = http.createServer(app);

server.listen(3000, function(){
  console.log('The server is running on port 3000');
});
