const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200,{"content-type" : 'text/html'});

    res.write(`
        <form> 
        <input type = "text" placeholder = "enter your name" name = 'name'>
        <input type = "text" placeholder = "enter your email" email = 'email'>

        <button> Submit </button>
        </form>
        `)
    res.end();
}).listen(3200);