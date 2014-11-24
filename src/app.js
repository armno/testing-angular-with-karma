(function() {
	angular.module('myApp', [])
		.factory('Person', Person);

	function Person() {
		return function Person(name) {
			this.name = name;
		};
	}
})();