var fs = require('fs');

var stream = new fs.ReadStream(__filename, {encoding: 'utf-8'});

stream.on('readable', function () {
	var data = stream.read();
	console.log(data);
	// console.log(this);
});

stream.on('end', function () {
	console.log('the end');
});

stream.on('error', function (err) {
	console.log('!!!ERROR');
	console.log(err);
});
