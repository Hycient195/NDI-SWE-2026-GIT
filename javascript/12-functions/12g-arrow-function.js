/* Regular Named function */
function add(a, b) {
    return a + b;
}

/* Function Expression */
const add2 = function(a, b) {
    return a + b
}

/* Arrow Function */
const add3 = (a, b) => {
    return a + b
}


/* ======= Application of All Kinds of function definition styles ===== */
function add(a, b, callback) {
    const sum = (a + b);

    console.log("Sum is ", sum);

    callback(sum)
}

/* Callback Function: This is a named callback function */
function additionComplete(sum) {
    console.log("Addition complete, sum is", sum);
}

/* Function expression callback function */
const additionComplete2 = function(sum) {
    console.log("Addition complete, sum is", sum);
}

/* Arrow function callback function */
const additionComplete3 = (sum) => {
    console.log("Addition complete, sum is", sum);
}

/* Function (Invocations | call | execution) */
add(3, 4, additionComplete) // Invoking a named callback function
add(4, 5, additionComplete2) // Invoking a function expression callback
add(5, 6, additionComplete3) // Invoking an arrow function callback function