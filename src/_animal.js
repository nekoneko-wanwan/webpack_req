var Animal = function(name) {
	this.name = name;
};

Animal.prototype.greet = function() {
	return this.name + ' wan wan';
};

module.exports = Animal;

