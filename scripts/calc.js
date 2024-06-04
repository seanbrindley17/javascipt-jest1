function addition(num1, num2) {     // To pass the test where other numbers are returned, have to add simple addition like this   
    return num1 + num2;              
}

module.exports = addition;      // Exports the function so that the require statement in the test file works

// Test 1
// function addition() {       // A trivial funtion that just returns 42
//     return 42;              // Is just enough code to get the test to pass
// }


// Test 2
// function addition(num1, num2) {     // To pass the test where other numbers are returned, have to add simple addition like this   
//     return num1 + num2;              
// }