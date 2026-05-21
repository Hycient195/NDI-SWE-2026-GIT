/*
    This is the implicit or explicit conversion of a value from one data type to
    another.
*/

/* Implicit Type Coercion */
let a = 5;
let b = "3";
console.log(a + b); /* The number 5 is coerced to a string "5", and then concatenated with "3" to produce "53" */
console.log("car" + "pet"); /* Both "car" and "pet" are strings, so they are concatenated to produce "carpet" */

let message = "Status" + false;
console.log(message)

console.log(13 + true)
console.log(13 > true)
console.log(5 > "carpet");
console.log(5 > "4");

console.log("10" - "6");
console.log("5" * 10)


/* Explicit Type Coercion */
let str5 = "5"
let num5 = 5;

console.log(str5 + num5);

/* String to Number Explicit coercion */
let strToNum5 = Number(str5);

console.log(strToNum5 + num5);

/* Number to String Explicit Coercion */
let numFour = 4;
let numSix = 6;

/* Coercion from integer number to string numbers */
let strFour = String(numFour);
let strSix = String(numSix);

console.log(strFour + strSix);

/* Boolean Type Coercion/casting */
/* Truthy Boolean Values */
let highWorkRate = 10 /* Number greater than 0 */
let nonEmptyString = "Hello";
let nonEmptyArray = [1, 2, 3];
let nonEmptyObject = { name: "John" };

/* Falsy Boolean Values */
let lowWorkRate = 0;
let emptyString = "";
let nullValue = null;
let undefinedValue = undefined;

let isWorkRatedHigh = Boolean(highWorkRate);
let isWorkRatedLow = Boolean(lowWorkRate);
console.log(isWorkRatedHigh);
console.log(isWorkRatedLow);

let sampleArray = ["H", "E", "L", "L", "O"];
let arrayString = String(sampleArray);
console.log(arrayString);

let strDate = "2024-06-01";
let dateObj = new Date(strDate);

console.log(dateObj);

let setStr = new Set(sampleArray)
console.log(setStr);