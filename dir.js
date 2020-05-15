var fs = require('fs');

// fs.unlink() - to delete a file

//sysncronize create and delete directory
// fs.mkdirSync('Stuff');
// fs.rmdirSync('Stuff');

//Asyncronize
fs.mkdir('Stuff',function(){
    fs.readFile('readme.txt','utf8', function(err,data){
        fs.writeFile('./Stuff/writeMeASYNC.txt', data, function(err, result) {
            if(err) console.log('error', err);
        });
    });
});
fs.unlink('./Stuff/writeMeASYNC.txt', function(){
    fs.rmdir('Stuff', function(){
        console.log('Directory deleted!');
    });
});
