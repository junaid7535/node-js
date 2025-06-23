const http = require('http');

http.createServer((req,res) => {
    res.end("hello using nodemon server");
}).listen(4800);