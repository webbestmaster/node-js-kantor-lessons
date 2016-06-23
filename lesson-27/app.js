var domain = require('domain');
var server = require('./server');
var serverDomain = domain.create();

serverDomain.on('error', function (err) {
	console.error('I got error', err);
});

serverDomain.run(function () {
	serverDomain.add(server);
	server.listen(3000);
});








