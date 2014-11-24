describe('Person', function() {

	// local reference to injected services
	var Person, visitor, $httpBackend;

	// bring in our app's module
	beforeEach(module('myApp'));

	beforeEach(module(function($provide) {
		visitor = {};
		$provide.value('visitor', visitor);
	}));

	beforeEach(inject(function(_Person_, _$httpBackend_) {
		Person = _Person_;
		$httpBackend = _$httpBackend_;
	}));

	describe('Constructor', function() {
		it('assigns a name', function() {
			expect(new Person('Ben')).to.have.property('name', 'Ben');
		});
	});

	describe('#greet', function() {
		it('greets UK people formally', function() {
			visitor.country = 'UK';
			expect(new Person('Nigel').greet()).to.equal('Good day to you, Nigel.');
		});

		it('greets US people hipsterly', function() {
			visitor.country = 'US';
			expect(new Person('Ben').greet()).to.equal('Hey, Ben!');
		});
	});

	describe('#create', function() {
		it('creates a person on the server', function() {

			$httpBackend.expectPOST('/people', {
				name: 'Ben'
			})
			.respond(200);

			var succeeded;
			new Person('Ben').create()
				.then(function() {
					succeeded = true;
				});

			$httpBackend.flush();
			expect(succeeded).to.be.true;
		});
	});
});