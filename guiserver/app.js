var express = require('express');
var process = require('process');
var path = require('path');
var app = express(); // better instead
var port = 3001;

console.log(process.cwd());
var index = process.cwd().lastIndexOf("/")
var path = process.cwd().substring(0,index);
app.use('/', express.static(path));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))