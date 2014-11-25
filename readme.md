from this tuts: https://www.airpair.com/angularjs/posts/testing-angular-with-karma

# What I have learned

### First test: `Person` Factory
- `Person` variable in `personSpec` is use to keep local reference to `Person` factory in the test. Makes `Person` factory available for every tests.
- `ngMock` does something with `_` magic with injected module. To inject a module in `beforeEach` block, append and prepend `_` to the injected module name.
- `to.have.property` checks if the object has given property and also if it has expected value. If we pass only 1 argument to this assertion, it will check only if the object has a property.

### 2nd test: `Person.greet()` method
- The tutorial writes code first then test. I should (and actually am doing) write test first then code after.
- Injecting a service's dependency into the test, use `$provide` service.

### 3rd test: `Person.create()` method
- `$httpBackend` isn't that scary. injected as a service like `Person` service.
- `$httpBackend.flush()` - flush pending http requests and fulfill with mocked response.

### 4th test: `PersonController`
- there is not much about testing controllers in the tutorial.
- initiating controller spec is pretty much like service spec, with extra of creating controller and child `$scope` from `$rootScope`.

### 5th test: 'welcome' directive
- inject `$rootScope` to create a child scope like for controller testing.
- create a directive element: use `$compile` with `scope`. this will eventually create and compile the directive element.
- `Person` object can be mocked (in `scope`) for testing since we are not testing the Person service here.
- `scope.$digest()` runs the digest loop manually. (digest loop is called automatically when the application runs)
- assertion: check if compiled directive has expected output (text is fine)