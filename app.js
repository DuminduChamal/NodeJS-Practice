console.log("Hello World!!");
console.log("Testing!!");

setTimeout(function(){
    console.log("3 Seconds have passed");
},3000);

var time=0;
setInterval(function(){
    time+=2;
    console.log(time+" Seconds have passed");
},2000);