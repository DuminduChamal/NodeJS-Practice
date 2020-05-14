//normal function statement
function sayHi(){
    console.log('Hi!');
}

sayHi();

//function expression, it annonymous function

var sayBye = function(){
    console.log('Bye!');
};

sayBye();

//calling a function through another function
function callFunction(fun){
    fun();
}

callFunction(sayHi);
callFunction(sayBye);