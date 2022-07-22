// console.log("helo world");
// console.log("Welcome to Nodejs");
// console.log("welcome back to aliens");

// var http = require("http");
// http.createServer(function(req,res){
//     res.write("hello sunil");
//     res.write("\n"); // 3 new lines!  My oh my!
//     res.write("welcome back aliens");
//     res.end();
   
// }).listen(8080)

// var calc = require('./calc.js')
// result = calc.add(4,5)
// console.log("the sum of the two Number is "+ result)
// var result1 = calc.add(10,10)
// console.log("again the sum of the two Number is "+result1)
// console.log("the subtraction of the two Number is ")
// var sub1 = calc.sub(10,10)
// console.log("the subtraction fo the two Number is "+ sub1)
// var subtr1 = calc.sub(100,1000)
// console.log("the subtraction of the Two Number is "+ subtr1)

var fs = require('fs')
fs.readFile('calc.js','utf8',function(err,data){
    console.log(data)
})