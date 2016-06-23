var http = require('http');
var fs = require('fs');


new http.Server(function (req, res) {

	var file = new fs.ReadStream(__filename + 'dd');

	sendFile(file, res);


}).listen(3000);


function sendFileBigVersion(file, res) {

	file.on('readable', write);

	function write() {

		var fileContent = file.read();

		if (fileContent && !res.write(fileContent)) {

			file.removeListener('readable', write);

			res.once('drain', function () {
				file.on('readable', write);
				write();
			});

		}

	}

	file.on('end', function () {
		res.end();
	});

}

function sendFile(file, res) {

	file.pipe(res);

	file.on('error', function (err) {
		console.log('!!!ERROR');
		console.log(err);
		res.end('no data');
	});

	// client close connection
	// close - this is error for res
	// finish - is normal for res
	res.on('close', function () {
		file.destroy();
	});

}
