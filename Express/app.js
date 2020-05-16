var express = require('express');

var app = express();

app.get('/', function(req,res){
    res.send('THIS IS THE HOME PAGE')
});

app.get('/contact', function(req,res){
    res.send('THIS IS THE CONTACT PAGE')
});

app.listen(3000);