describe('PersonController', function() {
	var Person, controller, scope;

	// bring in our app's module
	beforeEach(module('myApp'));

	beforeEach(module(function($provide) {
		$provide.value('visitor', {});
	}));

	beforeEach(inject(function(_Person_, $controller, $rootScope) {
		Person = _Person_;
		scope = $rootScope.$new();
		controller = $controller('PersonController', {
			$scope: scope
		});
	}));

	it('assigns a person to the controller', function() {
		expect(controller.person).to.be.an.instanceOf(Person);
	});
});