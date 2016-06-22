var http = require('http');
var url = require('url');


var server = new http.Server();

server.listen(1337, '127.0.0.1');

server.on('request', function (req, res) {

	console.log(req.method, req.url);

	var urlParsed = url.parse(req.url, true); // add true to parse query part (?key=value)

	res.setHeader('Cache-control', 'no-cache, no-store, must-revalidate');

	if (urlParsed.pathname === '/echo' && urlParsed.query.message) {
		res.end(urlParsed.query.message);
	} else {
		res.statusCode = 404;
		res.end('page/message not found');
	}

});




