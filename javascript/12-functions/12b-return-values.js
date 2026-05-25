// Returning values from functions


function add(a,b) {
    return a + b;
}

const additionResult = add(4, 6);

console.log("This is addition result", additionResult);


/*

    Problem statement
    
    Find the average of numbers 2, 3, 4

*/

function divide(a,b) {
    return a / b;
}


const intermediate1 = add(2, 3);

const intermediate2 = add(intermediate1, 4);

const average = divide(intermediate2, 3)

console.log(average);



/* =========== Early Return ========== */
/*
    This is practice of having a return statement within a conditional statement
    block, before the final return statement of the function. 
    This is used to return values conditionally based on a condition placed
    inside of the function.
*/

function testReturn() {
    return "First result";

    // ignored: all code below the first return statement is ignored by the javascript engine
    return "Second result";
    return "third result";

    return 20 * 50;
}

console.log(testReturn());

// The "return" keyword is used to mark the end of a function
function checkAge(age) {
    if (age < 18) {
        return "User too young";
    }
    return "Access granted";
}

console.log(checkAge(15));
console.log(checkAge(24))