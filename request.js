const http = require('http');

http.createServer((req,res) => {
    console.log(req.headers);

    res.end("request hello");
}).listen(5600);