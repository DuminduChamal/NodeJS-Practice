var stuff = require('./stuff');

console.log(stuff.counter(['Dumi','Chamal','sda','fgs']));
console.log(stuff.adder(stuff.pi,5));
console.log(stuff.adder(3,6));


var events = require('events');

var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function(msg){
    console.log(msg);
});

myEmitter.emit('someEvent','The event was emmited!');

//custom events on made up own objects
var util = require('util');

var Person = function(name){
    this.name= name;
};

util.inherits(Person, events.EventEmitter);

var James = new Person('James');
var Ryan = new Person('Ryan');
var Bobby = new Person('Bobby');

var people = [James, Ryan, Bobby];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name+' said: '+msg);
    });
});

James.emit('speak','Hey!!!');
Bobby.emit('speak', 'Worksssss!');