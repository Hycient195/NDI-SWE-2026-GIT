/* Question 1 
Write a function that takes in two numbers, min and max, and generates a random number between
the min and max numbers, with both min and max being in the range of the nubers generated
*/


function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(1, 20));
