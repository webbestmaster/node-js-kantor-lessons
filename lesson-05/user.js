function User(name) {
	this.name = name;
}

User.prototype.hello = function (user) {
	console.log('hello,', user.name);
};

module.exports = User;
