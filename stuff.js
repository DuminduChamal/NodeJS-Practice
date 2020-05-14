module.exports.counter = function(arr){
    return 'There are '+ arr.length + ' elements in this array!';
};

module.exports.adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`; //used template string with ``. so no need to use concatinating
};

module.exports.pi = 3.142;

