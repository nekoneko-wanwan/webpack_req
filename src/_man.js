var Man = function(name, age) {
	this.name = name;
	this.age = age;
};
Man.prototype.greet = function() {
	return 'My name is ' + this.name + ', I\'m ' + this.age;
};

module.exports = Man;
