var http = require('http');
http.createServer(function (erq, res) {
    res.writeHead(200, { 'Content_Type': 'text/html' });
    res.end('Hello World!');
}).listen(8080);