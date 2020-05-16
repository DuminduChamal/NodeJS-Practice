var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/', function(req,res){
    // res.send('THIS IS THE HOME PAGE')
    // res.sendFile(__dirname+'/index.html');
    res.render('index');
});

app.get('/contact', function(req,res){
    // res.sendFile(__dirname+'/contact.html');
    console.log(req.query);
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('contact-success', {data: req.body});
  })

// app.get('/profile/:id',function(req,res){
//     res.send('You request to see the profile of '+req.params.id);
// });

app.get('/profile/:name',function(req,res){
    var data = {age:23, job:'Programmer', hobbies: ['eating','reading','playing']};
    res.render('profile', {person: req.params.name, data: data});
});



app.listen(3000);