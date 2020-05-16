var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req,res){
    // res.send('THIS IS THE HOME PAGE')
    // res.sendFile(__dirname+'/index.html');
    res.render('index');
});

app.get('/contact', function(req,res){
    // res.sendFile(__dirname+'/contact.html');
    res.render('contact');
});

// app.get('/profile/:id',function(req,res){
//     res.send('You request to see the profile of '+req.params.id);
// });

app.get('/profile/:name',function(req,res){
    var data = {age:23, job:'Programmer', hobbies: ['eating','reading','playing']};
    res.render('profile', {person: req.params.name, data: data});
});



app.listen(3000);