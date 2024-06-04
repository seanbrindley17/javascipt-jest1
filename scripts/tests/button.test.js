/**
 * @jest-environment jsdom
 */

// jest contains a mock DOM, jsdom, which simulates the DOM. 
// Tests only load the contents of the javascript files and not the HTML page, so jsdom creates a mock DOM to use to test for changes to the contents of the page


const buttonClick = require("../button")   // Importing button click function from source file

beforeEach(() => {      // beforeEach is a jest directive that runs before each test is run. Only takes one argument, doesn't need a description
    
    // This is the exact javascript that would replace the HTML in the body 
    document.body.innerHTML = "<p id='par'></p>"    // Only need to specify the bit to test; the paragraph with the id of "par"
})

describe("DOM tests", () => {
    test("Expects content within 'p' to change", () => {    // Describes what the test is looking for
        buttonClick();      // Calls the buttonClick function, makes the button click automatically for the test
        
        // Gets the innerHTML of the element with the ID "par" within the document using dot notation
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");   // Expects the innerHTML to equal "You Clicked". Checks the content of the mock DOM <p> tested
    });                                                                            // to see if it has the text that is expected. 
});