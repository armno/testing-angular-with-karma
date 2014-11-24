from this tuts: https://www.airpair.com/angularjs/posts/testing-angular-with-karma

# What I have learned

### First test: `Person` Factory
- `Person` variable in `personSpec` is use to keep local reference to `Person` factory in the test. Makes `Person` factory available for every tests.
- `ngMock` does something with `_` magic with injected module. To inject a module in `beforeEach` block, append and prepend `_` to the injected module name.
- `to.have.property` checks if the object has given property and also if it has expected value. If we pass only 1 argument to this assertion, it will check only if the object has a property.