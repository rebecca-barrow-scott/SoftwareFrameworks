var express = require('express');
var formidable = require('formidable');
var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname + '/www'));

app.get('/', function(req, res){
    res.sendFile(__dirname, '/index.html');
});
app.post('/', function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req);
    res.sendFile(__dirname, '/index.html');
});

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('My First Nodejs Server!');
    console.log('Server listening on: '+ host + 'port:' + port);
    console.log('Access it here: http://localhost:3000/');
});
app.get('/account', function(req, res){
    res.sendFile(__dirname, '/account.html');
});
