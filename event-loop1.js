const fs = require("fs");

const a = 100;
setImmediate(() => console.log("set Immidated"))

fs.readFile("./demo.txt", "utf8", () => {
    console.log("filed reded");
    
})

setTimeout(() => {
    console.log("settimeout ecpired");
}, 100);

function print (){
    console.log("a is ", a);
    
}
Promise.resolve("hello")
.then((res) => console.log(res))



print();
console.log("last line ");








