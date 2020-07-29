module.exports = function(app, path){
    app.get('/account', function(req, res){
        let filepath = path.resolve('/account.html');
        res.sendFile(__dirname + filepath);
    });
}