var express = require('express');
var os = require("os");

var app = express();
var hostname = os.hostname();

app.get('/', function (req, res) {
    res.json({ success: true, hostname })
});

app.listen(80);

console.log('Running on http://localhost');