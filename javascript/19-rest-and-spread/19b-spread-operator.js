/*
    The spread operator uses the same syntax like the rest operator (...).

    However the spread operator does the opposite, and expands an iterable element
    (eg: array or object) into individual elements or properties
*/

function sumNumbers(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr ,0)
}

const arr = [1,2,3,4,5]

const result = sumNumbers(...arr);

console.log(...arr)
console.log(result)


/* Copyying values between array, and objects */

/* Spreading Objects */
const obj1 = {
    prop1: "One",
    prop2: "Two"
}

const obj2 = {
    prop3: "Three",
    prop4: "Four"
}

const finalObject = { ...obj1, ...obj2 }

console.log(finalObject)


/* Spreading Arrays */
const arr1 = ["One", "Two"];
const arr2 = ["Three", "Four"]

const finalArray = [ ...arr1, ...arr2 ];

console.log(finalArray)