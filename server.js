var fs = require('fs');
var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res) {
  fs.readFile('views/gmaps.html', 'utf8', function(err, data) {
    console.log(data);
    res.send(data);    
  })
});

app.listen(3000);
