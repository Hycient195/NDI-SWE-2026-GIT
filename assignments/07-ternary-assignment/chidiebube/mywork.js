
/** 
## Question 1

Write a command line program that collects numerical input from the console, uses a ternary operator to compare the input if it is even or odd
and prints the message the message "Even Number" if the number is even, or "Odd Number"
if the number is odd.
*/


// This collects the number from the command line
const number = Number(process.argv[2]);

// Implementing the Ternary operator and using this expression (% 2 === 0) / (number & 1) === 0 to check if the number can be divided by 2.
const theresult = (number % 2 === 0) ? "This is an Even number" : "This is an Odd number";

// Log the result
console.log(theresult);



/**
## Question 2
Write a program that makes use of ternary operators to grade a user's score
according to the prescription below.

// Excellent -> 70 and above
// Very Good -> 60 to 70
// Good -> 50 to 60
// Pass -> 45 to 50
// Fair -> 40 to 45
// Fail -> 40 and below

*/

// const score = 65;
const score = Number(process.argv[2]);
// using nested ternary operators
const grade = (score >= 70) 
                        ? "Excellent" : 
                        (score >= 60) ? "Very good" :
                        (score >= 50) ? "Good" :
                        (score >= 45) ? "Pass" :
                        (score >= 40) ? "Fair" :
                        "Fail";

console.log(`Your grade is: ${grade}`);