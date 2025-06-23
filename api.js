const http = require('http');

const userData = [
    {
        name : 'John',
        age : 30,
        email : 'newyork@gmail.com'
    },
    {
        name : 'Tom',
        age : 30,
        email : 'newyork@gmail.com'
    },
    {
        name : 'Tom',
        age : 30,
        email : 'newyork@gmail.com'
    }
]

http.createServer((req,res) => {
    res.setHeader("Content-Type",'application/json');

    res.write(JSON.stringify(userData));
    res.end();

}).listen(6200);