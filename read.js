var fs = require('fs');

//Syncronize
// var readMe = fs.readFileSync('readme.txt', 'utf8'); //FILE CONTENT IS STORED IN readMe
// console.log(readMe);

// fs.writeFileSync('writeMe.txt',readMe);

//Asyncronize -  not blocking the code
fs.readFile('readMe.txt','utf8', function(err,data){
    console.log(data);
    console.log(err);
    fs.writeFile('writeMeASYNC.txt', data, function(err, result) {
        if(err) console.log('error', err);
    });
});
console.log('Testing....');

