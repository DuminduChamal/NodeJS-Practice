var express = require('express');

var app = express();

app.get('/', function(req,res){
    res.send('THIS IS THE HOME PAGE')
});

app.get('/contact', function(req,res){
    res.send('THIS IS THE CONTACT PAGE')
});

app.get('/profile/:id',function(req,res){
    res.send('You request to see the profile of '+req.params.id);
});

app.listen(3000);