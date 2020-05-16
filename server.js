var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made: '+req.url);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Hello World!<h1>');
});


server.listen(3000, '127.0.0.1');
console.log('listing from port 3000....')