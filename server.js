var express = require('express');
var path = require('path');
var app = express();
app.set('view engine', 'ejs');  
app.use(express.static(__dirname+'/static/'));

app.all('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.all('/health', function(req, res) {
    res.status(200).send('I am healthy!');
});

app.listen(8080);
