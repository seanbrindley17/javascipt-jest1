

// If test file is below the js file being tested in directory, need to use .. to connect it
const addition = require("../calc");        // Import function that is being tested from the calc.js file. Assign at constant so it doesn't get overwritten


describe("Calculator", () => {       // We want to describe the calculator tests               
    describe("Addition function", () => {       // We want to describe the addition function
        test("should return 42 for 20 + 22", () => {        // Describe the test
            expect(addition(20, 22)).toBe(42);      // We expect that when the addition function is called with numbers 20 & 42, it will return 42
        });                                         // .toBe is the same as using === to check for value and type            
        
        test("should return 73 for 42 + 31", () => {        // Create test that intentionally fails. 
            expect(addition(42, 31)).toBe(73);              // Function currently only returns 42, so any other return will fail it
        })                                           
    });

    describe("Subtraction function", () => {

    });

    describe("Multiply function", () => {

    });

    describe("Division function", () => {

    });
})