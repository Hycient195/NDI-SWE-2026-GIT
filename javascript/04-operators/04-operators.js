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

/* The "=" operator is the assignment operator used to assign a value to a variable */;
let d = 5 

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



/* ============ Bitwise Operators ============= */

/* Bitwise AND: This is denoted by the "&" symbol */
let k = 3;
let l = 12;
let result = k & l;
console.log("Bitwise AND:", result);

/* Bitwise OR: This is denoted by the "|" symbol */
let m = 3;
let n = 12;
let result2 = m | n;
console.log("Bitwise OR:", result2);

/* Bitwise XOR: This is denoted by the "^" symbol */
let o = 3;
let p = 12;
let result3 = o ^ p;
console.log("Bitwise XOR:", result3);

/* Bitwise NOT: This is denoted by the "~" symbol */
let q = 3;
let result4 = ~q;
console.log("Bitwise NOT:", result4);

/* Bitwise Left Shift: This is denoted by the "<<" symbol */
let r = 3;
let result5 = r << 2; /* This shifts the bits of r to the left by 2 positions */
console.log("Bitwise Left Shift:", result5);

/* Bitwise Right Shift: This is denoted by the ">>" symbol */
let s = 12;
let result6 = s >> 2; /* This shifts the bits of s to the right by 2 positions */
console.log("Bitwise Right Shift:", result6);

/* Bitwise Unsigned Right Shift: This is denoted by the ">>>" symbol */
let t = -12;
let result7 = t >>> 2; /* This shifts the bits of t to the right by 2 positions, filling with zeros from the left */
console.log("Bitwise Unsigned Right Shift:", result7);

/* Bitwise Zero Fill Right Shift: This is denoted by the ">>>" symbol */
let u = -12;
let result8 = u >>> 2; /* This shifts the bits of u to the right by 2 positions, filling with zeros from the left */
console.log("Bitwise Zero Fill Right Shift:", result8);



/* ============ Ternary Operators =========== */
// condition ? (expression if code is true) : (expression if code is false)
let age = 18;
let isAdult = age >= 18 ? "Yes, you are an adult." : "No, you are not an adult.";
console.log(isAdult);



/* ============ Type Operators =========== */

/* The "typeof" operator: This is used to determine the type of a variable */
let score = 90;
let typeOfScore = typeof score;
console.log("Type of score:", typeOfScore);


/* The "instanceof" operator: This is used to check if an object is an instance of a specific class or constructor function */
let today = new Date()
let typeOfToday = today instanceof Date /* This returns true because "today" is obtained from the Date type */
console.log("Is today an instance of Date?", typeOfToday);

let anotherTypeOfToday = today instanceof Map; /* This returns false because "today" is not obtained from the Map type */
console.log("Is today an instance of Map?", anotherTypeOfToday);

let jobs = ["Developer", "Designer", "Manager"];
let typeOfJobs = jobs instanceof Array;
console.log("Is jobs an instance of Array?", typeOfJobs);



// Operator precedence: This refers to the order in which operators are evaluated in an expression.