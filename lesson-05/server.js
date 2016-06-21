var log = require('./logger')(module);

var User = require('./user');

var vasia = new User('Вася');
var petya = new User('Петя');

log('USER is GONE');

vasia.hello(petya);