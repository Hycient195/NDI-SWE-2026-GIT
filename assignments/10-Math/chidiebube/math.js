/**
 * Write a function that takes in two numbers, min and max, and generates a random number between
the min and max numbers, with both min and max being in the range of the numbers generated
 */


/**
 * Code Comment
 * 
 * 1. create a function to generate a random whole number between two values,
 *  >> check if min is > max value, if yes, swap their values using array destructuring.
 * 
 *      eg: min = 20, max = 10 => min = 10, max = 20;
 * 
 * 2. using the math.random() to generate a decimal and Math.floor()
 *  to round down and remove decimal part.
 * 
 * 3. Multiply it by (max - min + 1) to calculate the size of the range.
 * 
 * 4. Add the min to shift the range so it starts at the minimum value.
 * 
 * 5. Display the value of the random number.
 * 
 */


function anyNumber(min, max) {
    // check if min is > max value, if yes, swap their values using array destructuring
    if (min > max) {
        [min, max] = [max, min]
    }  
    // using the math.random() to generate a decimal and Math.floor() to round down and remove decimal part.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// output
console.log(anyNumber(2, 10));