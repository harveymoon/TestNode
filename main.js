// this is a simple node server that hosts the static files

console.log("testing node in class")

var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000);

console.log('Server running at http://localhost:3000/');