var util = require('util');

var obj = {
	a: 3,
	b: 4
};

console.log(util.inspect(obj));

// there is using type converting
var str = util.format('My %s %d %j', 'string', 123, {a:1});
console.log(str);

// util.inherits() // <- use as extend for constructions
