// IMPORT MODULES under test here:
// import example from '../src/example.js';
import makeUser from '../log-in/make-user.js';


const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();

    formData.set('name', 'karl');
    formData.set('class', 'wizard');

    const expected = {
        name: 'karl',
        class: 'wizard',
        completed: {},
        HP: 50,
        gold: 0
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const results = makeUser(formData);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});
