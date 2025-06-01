require("./xyz.js") ; // one module into another
const sum = require("./sum.js")

var name = "Rohit";

var a = 10;
var b = 20;
// console.log(name,a+b);

// console.log(globalThis); 
console.log(this); // empty object 

// GlobalThis => this will be refer to global object 

sum(a,b); // this will not work like this , code of sum.js willl run but we not be 
// able to access the variable and function of one module into another by simply requiring it  

// modules protects their variable and function from 

// if we dont want this defualt behavior then we need to export it from sum.js
// like this    module.exports = sum;

// if we need to export multiple thing then we can export it in inside an object

// this type of import and export are know as common js module or cjs 

// there is something called es modules

// by defult common js module


// es module is like react import and export not by defult in node 
// and for this in package.json we need to change type to module     "type": "module"

// not strict and strict

// sync and async