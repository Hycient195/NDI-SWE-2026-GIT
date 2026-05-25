/*

    A callback function is simply a function passed to into another function as an input argument

*/

/*
    Problem Statement

    Create a function that adds two numbers, and after adding, prints a message "Addition complete!"
*/

function add(a, b, callback) {
    console.log("Sum is ", a + b);

    callback()
}

function alertUserAfterConversion() {
    console.log("Addition complete")
}

add(3, 4, alertUserAfterConversion)


// Passing arguments to callback functions
// Anonymous callback functions



/* ===================================================== */
function add(a, b, callback) {
    const sum = (a + b);

    console.log("Sum is ", sum);

    callback(sum)
}

function alertUserAfterConversion(sum) {
    console.log("Addition complete, sum is", sum);
}

add(3, 4, alertUserAfterConversion)