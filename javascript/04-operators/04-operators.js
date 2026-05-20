/*
    Operators are special keywords or symbols used to perform operations on values and variables.
    The variables they operate on are called "operands".
*/

/*
    Operators are broadly categorized into the following types:
    1. Arithmetic Operators
    2. Comparison Operators
    3. Logical Operators

    4. Assignment Operators
    5. Bitwise Operators
    6. Ternary Operator
    7. Type Operators
*/

/* ============== Arithmetic Operators ============= */
let a = 10;
let b = 5;

console.log("Addition:", a + b); /* Addition */
console.log("Subtraction:", a - b); /* Subtraction */
console.log("Multiplication:", a * b); /* Multiplication */
console.log("Division:", a / b); /* Division */

console.log("Modulus:", 14 % 5); /* Modulus (Remainder) */
console.log("Exponentiation:", a ** b); /* Exponentiation */



/** ============== Comparison Operators ============= */
let x = 10;
let y = 5;

console.log("Equal to:", x == y); /* Equal to */
console.log("Not equal to:", x != y); /* Not equal to */
console.log("Greater than:", x > y); /* Greater than */
console.log("Less than:", x < y); /* Less than */
console.log("Greater than or equal to:", x >= y); /* Greater than or equal to */
console.log("Less than or equal to:", x <= y); /* Less than or equal to */
console.log("Strictly equal to:", x === y); /* Strictly equal to */
console.log("Strictly not equal to:", x !== y); /* Strictly not equal to */

/* The difference between "==" and "===" is that "==" performs type coercion, while "===" does not. */
console.log("5 == '5':", 5 == "5"); /* true: This compares only value */
console.log("5 === '5':", 5 === "5"); /* false: This compares both value and type */


/** ============== Logical Operators ============= */
/*
    These are used to evaluate logical expressions, that resolve to "truthy" or "falsy" values.
*/
let isSunny = true;
let isWarm = false;
let isChilled = true;

console.log("Logical AND:", isSunny && isWarm && isChilled); /* Logical AND: A logical AND operation is true and only true, if all operamds are strictly true */
console.log("Logical OR:", isSunny || isWarm || isChilled); /* Logical OR: A logical OR operation is true if at least one operand is true */
console.log("Logical NOT:", !isSunny); /* Logical NOT: This is an inverse operation that inverts truthy and falsy values */


/** ============== Assignment Operators ============= */
let c = 10;
let d = 5;

c += d; /* Equivalent to c = c + d */
console.log("Assignment +=", c);

c -= d; /* Equivalent to c = c - d */
console.log("Assignment -=", c);

c *= d; /* Equivalent to c = c * d */
console.log("Assignment *=", c);

c /= d; /* Equivalent to c = c / d */
console.log("Assignment /=", c);

c %= d; /* Equivalent to c = c % d */
console.log("Assignment %=", c);

c **= d; /* Equivalent to c = c ** d */
console.log("Assignment **=", c);


// Operator precedence: This refers to the order in which operators are evaluated in an expression.