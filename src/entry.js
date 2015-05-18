var $ = require('./lib_jquery');


$(function() {

	var v = require('./_variables');

	function manFunc() {
		var Man = require('./_man');
		var m = new Man(v.human.name, 30);
		console.log(m.greet());
	}

	function animalFunc() {
		var Animal = require('./_animal');
		var dog = new Animal(v.dog.name);
		console.log(dog.greet());

		var bark = require('./_bark');
		bark(v.dog.type);
	}

	manFunc();
	animalFunc();


});