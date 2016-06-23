// node server.js port=3000
var http = require('http');

console.log(process.argv);
console.log(process.env);

http.createServer(function (req, res) {

	res.end('The server is running');

}).listen(3000);
