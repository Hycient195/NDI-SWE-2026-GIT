const age = 18;

if (age < 18) {
    console.log("Access denied");
} else {
    console.log("Access allowed");
}

/*
    The ternary operator is a shorter syntax for implementing a simple
    if-else statement
*/

/*

    Ternary operator syntax

    condition ? truth expression : false expression
    
*/

(age < 18) ? console.log("Access denied") : console.log("Access allowed");
