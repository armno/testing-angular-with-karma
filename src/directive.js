(function() {
	angular.module('myApp')
		.directive('welcome', welcome);

	function welcome() {
		return {
			restrict: 'E',
			scope: {
				person: '='
			},
			template: '<h1>{{ person.greet() }} Welcome to the app!</h1>'
		};
	}
})();
