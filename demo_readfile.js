/*
// The Node.js file system module allows you to work with the file system
// on your computer.
// To include the File System module, use the require() method:
var fs = require('fs');
*/

/*
// Create a Node.js file that reads the HTML file, and return the content:
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);
*/



// The File System module has methods for creating new files:
// fs.appendFile()
// fs.open()
// fs.writeFile()


/*
// Create a new file using the appendFile() method:
var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
*/


/*
// The fs.writeFile() method replaces the spedified file and content if it exists.
// If the file does not exist, a new file, containing the specified content, will be created:
// Create a new file using the writeFile() method:

var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
*/


/*
//      Update Files
// Append "This is my text." to the end of the file "mynewfile1.txt":
var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});
*/



/*
// Append "This is my text." to the end of the file "mynewfile1.txt":
var fs = require('fs');
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});
*/


/*
//         Delete Files
// To delete a file with the File System module, use the fs.unlink() method.
// The fs.unlink() method deletes the specified file:
// Delete "mynewfile2.txt":
var fs = require('fs');
fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});
*/



//          Rename Files
// To rename a file with File System module, use the fs.rename() method.
// The fs.rename() method renames the specified file:
// Rename "mynewfile1.txt" to "myrenamedfile.txt":
var fs = require('fs');
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});




