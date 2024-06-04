/**
 * @jest-environment jsdom
 */

// jest contains a mock DOM, jsdom, which simulates the DOM. 
// Tests only load the contents of the javascript files and not the HTML page, so jsdom creates a mock DOM to use to test for changes to the contents of the page


const buttonClick = require("../button")   // Importing button click function from source file

beforeEach(() => {      // beforeEach is a jest directive that runs before each test is run. Only takes one argument, doesn't need a description

    // Add in node fs module. Built into node. Allows for opening, reading and writing files.
    let fs = require("fs");

    // Uses fs to read the contents of the index.html file with the utf-8 character set and store it in a variable "filecontents"
    let fileContents = fs.readFileSync("index.html", "utf-8");   // Doesn't need path to open index, tests run from Node root directory, where index.html is
    
    // To attach to the DOM. This is standard script
    document.open();    // Open the document
    document.write(fileContents);   // Write the file contents 
    document.close();    // Close the document
})


describe("DOM tests", () => {
    test("Expects content within 'p' to change", () => {    // Describes what the test is looking for
        buttonClick();      // Calls the buttonClick function, makes the button click automatically for the test
        
        // Gets the innerHTML of the element with the ID "par" within the document using dot notation
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");   // Expects the innerHTML to equal "You Clicked". Checks the content of the mock DOM <p> tested
    });                                                                            // to see if it has the text that is expected. 

    // Test to see whether index.html is actually being read
    test("h1 should exist", () => {       // Checking to see if the h1 tag exists in the index.html page

        // This gets all the h1 elements and stores them in an array. Therefore I expect there to be one item in the array as there should only be one h1 tag
       expect(document.getElementsByTagName("h1").length).toBe(1);    // If there are no h1 tags or two or more h1 tags, the length will be 0, or 2 or more, which fails the test
    });
});






// Example beforeEach() that works on the p element with the ID of "par"
// beforeEach(() => { 
//     // This is the exact javascript that would replace the HTML in the body:

//     document.body.innerHTML = "<p id='par'></p>"    // Only need to specify the bit to test; the paragraph with the id of "par"
// })