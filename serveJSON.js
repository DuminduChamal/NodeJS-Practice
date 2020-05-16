var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: '+req.url);
    res.writeHead(200,{'Content-Type':'application/json'});
    var myObj = {
        name: 'Dumi',
        job: 'Nothing',
        age: 23
    };
    
    res.end(JSON.stringify(myObj)); // this method expects string or buffer
});


server.listen(3000, '127.0.0.1');
console.log('listing from port 3000....')