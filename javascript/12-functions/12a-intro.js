/*
    A function is an executable block of code used to carry out
    a specific functionality. It enables code to be used/executed
    only where they are needed, and reused also, without writing them
    all over again.
*/

/*

function functioName() {
    // executable code goes here
}

function functionName(arg1, arg) {
    // perform an action using the function arguments
}

*/

/* Function Definition */
function sayHello() {
    console.log("Hello user");
}

/* Function execution | invocation | calling */
sayHello()


/*
    Function arguments are the input passed to a function to influence its operation
*/

function add(a, b) {
    console.log("Addition result it", (a + b))
}

// function currying | Curried function

add(5, 7);
add(20, 15);
add(5, 9);
add(15, 3);


/* Calling a function in a function */
function sayHiAndHello() {
    console.log("Hi!");
    sayHello() // Function invocation of a user defined function
}