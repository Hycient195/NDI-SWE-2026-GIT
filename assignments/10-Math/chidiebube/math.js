/**
 * Write a function that takes in two numbers, min and max, and generates a random number between
the min and max numbers, with both min and max being in the range of the numbers generated
 */


/**
 * Code Comment
 * 
 * 1. Created a function to generate a random whole number between two values,
 *  >> check if min is > max value, if yes, swap their values using array destructuring.
 * 
 *      eg: min = 20, max = 10 => min = 10, max = 20;
 * 
 * 2. Using the math.random() to generate a decimal and Math.floor()
 *  to round down and remove decimal part.
 * 
 * 3. Then Multiply it by (max - min + 1) to calculate the size of the range.
 * 
 * 4. Add the min to shift the range so it starts at the minimum value.
 * 
 * 5. Display the value of the random number.
 * 
 */
 
const rand = Math.random(); // return a decimal random number btw 0 and 1

function aRandomNumber(min, max) {
    // check if min is > max value, if yes, swap their values using array destructuring
    if (min > max) {
        [min, max] = [max, min]
    }  
    // using the math.random() to generate a decimal btw 0 and 1, and Math.floor() to round down and remove decimal part.
    return Math.floor(rand * (max - min + 1)) + min;
}
// output
console.log(aRandomNumber(2, 10));