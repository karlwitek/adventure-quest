// IMPORT MODULES under test here:
// import example from '../src/example.js';
import makeListItemLink from '../map/make-list-item-link.js';



const test = QUnit.test;

test('makes a user object in plain JS from a formData Object', function(assert) {
    
    //Arrange
    // Set up your parameters and expectations
    const expected = `<li class="quest-item"<a href="../quest/?id=monster">A Den of Monsters</a></li>`;

    const li = makeListItemLink(questData);

    const HTMLString = li.outerHTML;
    //Act 
    // Call the function you're testing and set the result to a const
    
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(HTMLString, expected);
});
