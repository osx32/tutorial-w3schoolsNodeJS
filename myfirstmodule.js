/*
// To include a module us teh require() function with the name of the module:
var http = require('http');
*/


/*
//Now your application has access to the HTTP module and is able to create a server
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World! too');
}).listen(8080);
*/



//You can create your own modules, and easily include them in your application
//The following example creates a module that returns a date and time object
exports.myDateTime = function () {
    return Date();
};



