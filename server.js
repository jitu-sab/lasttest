var http = require('http');
http.createServer(function(req,res){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World! this world is full of data');
}).listen(8081);
console.log('Server started on localhost:8081; press Ctrl-C to terminate...!');
