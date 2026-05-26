/**
 * 
 *  Student Assignment for Monday 24th May 2026.
 * 
 *  Do a deep study for presentation on command line arguments and process.argv in JavaScript. Then, write a code snippet that demonstrates the use of command line arguments in JavaScript. You can use the process.argv array to access the command line arguments passed to your script. Make sure to include comments in your code to explain how it works.
 * 
 */

// Argument Vector

/* Input from our terminal are coerced from strings to number for them to be used for arithimetic operations */
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

console.log("Result is ", (a + b));


// console.log(process.argv)

// console.log("Hello", name);
