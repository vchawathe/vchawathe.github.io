var express = require('express');
var process = require('process');
var path = require('path');
var app = express(); // better instead


console.log(process.cwd());
var index = process.cwd().lastIndexOf("/")
var path = process.cwd().substring(0,index);
app.use('/', express.static(path));


console.log(path);
app.listen(3001);