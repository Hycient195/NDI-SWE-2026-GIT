/* ==== Basic Destructuring ===== */
const colors = ["red", "blue", "green"];

const [ primary, secondary ] = colors;

console.log(primary);
console.log(secondary);
console.log("\n=======================\n")


/* ==== Skipping Elements While Destructuring ===== */
const numbers = ["one", "two", "three", "four", "five", "six"];

const [first, , , fourth, , sixth] = numbers;

console.log(first);
console.log(fourth);
console.log(sixth);
console.log("\n=======================\n")


/* ==== Destructuring arrays with the "rest" parameter ===== */
const [ one, two, ...otherNumbers] = numbers;

console.log(one);
console.log(otherNumbers)
console.log("\n=======================\n")


/* ==== Default Values in Array Destructuring ===== */
const scores = [ 45 ];

const [ firstScore, secondScore = 0 ] = scores; // default values are used as fallbacks when the original value in unavailable

console.log(firstScore)
console.log(secondScore)

console.log("\n=======================\n")



/* ==== Array Swap with Destructuring ===== */
let right = "right-section"
let left = "left-section";

[right, left] = [left, right];

console.log(left)