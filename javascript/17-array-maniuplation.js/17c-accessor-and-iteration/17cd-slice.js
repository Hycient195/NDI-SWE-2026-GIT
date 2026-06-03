/* ================================ */
/* =========== .slice() =========== */
/* ================================ */
/*
    This returns a shallow copy of a portion of an array into a new array,
    by extracting from a start index to an end index of the original array,
    without including the item at the end index
*/

const numbers = ["one", "two", "three", "four", "five", "six"];

const slicedNumbers = numbers.slice(2, 4);

console.log(slicedNumbers)


/* using slice with 1 argument takes from the start index, to the end of the array */
const subArray = numbers.slice(3);
console.log(subArray)


/* Using .slice() to clone an array */
const clonedNumbers = numbers.slice();

console.log(clonedNumbers)

clonedNumbers[3] = "Hundred"

console.log(clonedNumbers)
console.log(numbers)


/* Using slice with negative index */
const fromEndIndex = numbers.slice(-2)
console.log(fromEndIndex);

