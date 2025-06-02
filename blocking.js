const crypto = require("crypto");

console.log("hello world");
var a = 395959;
var b = 4948348;

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key) => {
    console.log("second key");
    
})

console.log("hello after ");






