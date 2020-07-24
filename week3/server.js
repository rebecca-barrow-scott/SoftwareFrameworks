//require statements
var express = require('express');
var formidable = require('formidable');
var bodyParser = require('body-parser');

var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.post('/form', function(req, res){
    var users = [{'email': 'user1@gmail.com', 'password': '123'}, {'email': 'user2@gmail.com', 'password': '456'}, {'email': 'user3@gmail.com', 'password': '789'}];
    var customer = {};
    customer.email = res.body.email;
    customer.password = red.body.password;
    customer.valid = false;
    for(var i=0; i<users.length; i++){
        if(users[i].email == customer.email && users[i].password == customer.password){
            customer.valid = true;
        }
    }
    res.send(customer);
});

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('My First Nodejs Server!');
    console.log('Server listening on: '+ host + 'port:' + port);
    console.log('Access it here: http://localhost:3000/');
});
app.get('/account', function(req, res){
    res.sendFile(__dirname + '/www/account.html');
});