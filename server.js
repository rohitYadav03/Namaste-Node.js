const http = require("node:http");

const server =  http.createServer(function(req, res){
    res.end("You are back Rohit");
});

server.listen(1818);



