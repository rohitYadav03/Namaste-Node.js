const fs = require("fs");

const https = require("https");

console.log("hello world");

var a = 1078698;
var b =20986;

https.get("https://dummyjson.com/products/1", (res) => {
     console.log("fetch data");   
})

setTimeout(() => {
    console.log("setTimeout called after 5 second");
    
}, 5000);

fs.readFile("./notes.txt", "utf-8", (err,data) => {
    console.log("file data : ", data);
    
})

function multiplyfn(x,y){
    const result = x * y;
    return result;
}

var c = multiplyfn(a,b);
console.log("multiplication result is :", c);



// 🔁 Synchronous Execution Begins (Handled by V8 Engine)
// console.log("hello world");

// Executes immediately → Printed to console.

// var a = 1078698; and var b = 20986;

// Stored in memory heap.

// Synchronous assignments.

// 🌐 Asynchronous Operation 1 – https.get(...)
// Detected by V8 as async.

// Offloaded to Libuv.

// Libuv uses OS-level threads or networking system to make HTTP request.

// Meanwhile, JS engine continues without waiting.

// ⏱️ Asynchronous Operation 2 – setTimeout(...)
// Also async.

// Libuv sets up a timer in background.

// Callback is registered in Event Loop.

// 📂 Asynchronous Operation 3 – fs.readFile(...)
// File read is async.

// Handled by Libuv using system I/O APIs.

// Callback waits in event loop.

// 🧮 Synchronous Function Call – multiplyfn(a, b)
// New Function Execution Context is created.

// result = a * b is calculated.

// Value returned and stored in c.

// Execution context is popped off stack.

// Printed: multiplication result is : 22621582828

// 📥 Callback Execution – Handled by Libuv + Event Loop
// After all synchronous code finishes:

// Console prints:

// "multiplication result is : 22621582828"

// Event loop starts handling callbacks:

// ✅ If HTTP response is received → "fetch data" logged.

// ✅ After 5 seconds → "setTimeout called after 5 second" logged.

// ✅ When file read completes → "file data : ..." logged.

// 🧠 Important Concepts
// JavaScript is single-threaded and synchronous by nature.

// Node.js uses Libuv to handle asynchronous I/O using OS-level capabilities.

// Event loop ensures non-blocking execution: async callbacks are queued and executed only after sync code finishes.

