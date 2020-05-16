console.log("Hello World!!");
console.log("Testing!!");

setTimeout(function(){
    console.log("3 Seconds have passed");
},3000);

var time=0;
// setInterval(function(){
//     time+=2;
//     console.log(time+" Seconds have passed");
// },2000);

var timer=setInterval(function(){
    time+=2;
    console.log(time+" Seconds have passed");
    if(time>5)
        clearInterval(timer);
},2000);

