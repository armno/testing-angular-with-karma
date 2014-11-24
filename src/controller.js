(function() {
	angular.module('myApp')
		.controller('PersonController', PersonController);

	PersonController.$inject = ['$scope', 'Person'];
	function PersonController($scope, Person) {
		this.person = $scope.person = new Person('Ben');
	}
})();
