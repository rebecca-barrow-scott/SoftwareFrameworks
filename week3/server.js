//require statements
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var http = require('http').Server(app);

require('./www/routes/account.js')(app, path);
app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json());


app.get('/', function(req, res){
    res.sendFile(__dirname + '/www/index.html');
});
app.post('/login/attempt', function(req, res){
    var users = [{'email': 'user1@gmail.com', 'password': '123'}, {'email': 'user2@gmail.com', 'password': '456'}, {'email': 'user3@gmail.com', 'password': '789'}];
    var value = {};
    var customer = {};
    customer.email = req.body.email;
    customer.password = req.body.password;
    customer.valid = false;
    for(var i=0; i<users.length; i++){
        if(users[i].email == customer.email && users[i].password == customer.password){
            value = JSON.parse('{"ok": true}');
            //value = {"ok": true};
            customer.valid = true;
        }
    }
    if(!customer.valid){
        value = JSON.parse('{"ok": false, "errors":{}}');
        //value = {"ok": false, "errors": {}};
    }
    res.send(value);
});

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('My First Nodejs Server!');
    console.log('Server listening on: '+ host + 'port:' + port);
    console.log('Access it here: http://localhost:3000/');
});
