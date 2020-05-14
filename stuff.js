var counter = function(arr){
    return 'There are '+ arr.length + ' elements in this array!';
};

var adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`; //used template string with ``. so no need to use concatinating
};

var deduction = function(a,b){
    return `The deduction of the 2 numbers is ${a-b}`; //used template string with ``. so no need to use concatinating
};

var pi = 3.142;



// module.exports.pi = pi;

module.exports = {
    adder: adder,
    deduction: deduction,
    pi: pi,
    counter: counter,

};
