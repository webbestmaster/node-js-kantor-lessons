module.exports = function (module) {

	return function () {

		var moduleFile = module.filename;

		var args = [moduleFile].concat( Array.prototype.slice.call(arguments) );

		console.log.apply(console, args);

	}

};
