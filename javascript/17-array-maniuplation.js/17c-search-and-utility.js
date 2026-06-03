/* =============================== */
/* =========== .find() =========== */
/* =============================== */
/*
    The .find() method returns the value of the first element that satisfies the
    test callback function passed to it.
        If no item satisfies the condition, "undefined" is returned.

    It accepts a callback function, called a predicate

    .find() syntax

    .find((item, index, originalArray) => { // condition / } )
*/

const numbers = ["one", "two", "three", "four", "five", "six", "seven"];

const numberStartingWithF = numbers.find(num => num.length === 5);

console.log(numberStartingWithF)


const numAtIndexTwo = numbers.find((item, index) => index === 1);

console.log(numAtIndexTwo);





/* ==================================== */
/* =========== .findIndex() =========== */
/* ==================================== */
/*
    This returns the index of the first element that satisfies the provided
    predicate callback function. If no item satisfies the condition "-1" is returned

    .findIndex((item, index, originalArray) => { // condition / } )
*/
const indexOfFirItemWithLenghtFive = numbers.findIndex(num => num.length === 5);

console.log("Index of first item with a length of 5",indexOfFirItemWithLenghtFive)


/* =================================== */
/* =========== .includes() =========== */
/* =================================== */
/*
    This is used to ascertain if a given item exists in an array, and returns
    a boolean value accordingly.
*/

const fiveExists = numbers.includes("five");

console.log("Doe the number 'five' exist in the array?", fiveExists);


/* ================================== */
/* =========== .forEach() =========== */
/* ================================== */
/*
    This is a method used to loop through all items in an array to perform
    a certain operation for each.

    It looks very similar to the .map() method, but however, it does not
    return any value just like the .map() method.

    Refer to exercise on loops for examples

    It is good to note that the .forEach() method can mutate the
    original array on which is it called on, using its third argument.

    .forEach() syntax

    .forEach((value, index, originalArray) => { operation here })
*/

const values = [20, 30, 40];

values.forEach((value, index, originalArray) => {
    originalArray[index] = value * 2
})

console.log(values)




/* ================================ */
/* =========== .every() =========== */
/* ================================ */
/*
    The .every() method tests if "all" elements in an array passes a specified test predicate function.
    it returns a boolean accordingly

    .every((value, index, originalArray) => { predicate here })
*/

const scores = [5, 6, -3, 8, 9];

const allPositives = scores.every(score => score >= 0);

console.log(allPositives)





/* =============================== */
/* =========== .some() =========== */
/* =============================== */
/*
    This is used to ascertain if at least one item in the array, satisfies the
    given predicate function. It returns a boolean accordingly.

    .some((value, index, originalArray) => { predicate here })
*/

const nums = [5, 6, 3, 8, 9];

const hasNumberGreaterThanFive = nums.some(num => num > 10);

console.log(hasNumberGreaterThanFive)