/**
 * 
 * Assignment 1: Given an array of product objects in a user cart, write a function that in an array of product objects, and returns the sum of the prices multiplied by the quantity of all the items in the cart.
 * 
 *  >> object signature is
    >>    const userCart = { itemName: string; price: number, quntity: number }[]
 */

// At cycle 1: itemName = { name: "Laptop", price: 1000, quantity: 2 } → returns 2000
// At cycle 2: itemName = { name: "Phone", price: 500, quantity: 3 } → returns 3500
// At cycle 3: itemName = { name: "Headphones", price: 900, quantity: 5 } → returns 8000
// returns the sum of the total prices

// Array containing the items in the user's shopping cart
const userCart = [
    { itemName: "Laptop", price: 1000, quantity: 2 },
    { itemName: "Phone", price: 500, quantity: 3 },
    { itemName: "Headphones", price: 900, quantity: 5 }
];

// Function to calculate the total price of all items in the cart
function calculateTotalPrice(userCart) {

    // The reduce() method loops through each item in the array
    // acc  -> stores the running total
    // curr -> represents the current cart item
    return userCart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
}

console.log(`Total sum of Prices: ${calculateTotalPrice(userCart)}`);


console.log("\n===========================\n")
/**
 * Assignnent 2: Given an array of numbers with some numbers repeated, write a function that takes in an array of numbers, and returns an object in the signature below, showing each number, and how many times it appears in the array.
 * 
 * >> object signature sample
>>    input -> [3, 5, 6, 7, 3, 4, 8, 3, 4]
>>    output ->  { number: 3, occourence: 5, number: 2, occourence: 7, number: 7, occourence: 1 }
 * 
 */

// At cycle 1: accumulator = {}, currentValue = 1 → returns {number: 1, occurrances: 1}
// At cycle 2: accumulator = {1: {number: 1, occurrances: 1}}, currentValue = 2 → returns {1: {number: 1, occurrances: 1}, 2: {number: 2, occurrances: 1}}
// At cycle 3: accumulator = {1: {number: 1, occurrances: 1}, 2: {number: 2, occurrances: 1}}, currentValue = 3 → returns {1: {number: 1, occurrances: 1}, 2: {number: 2, occurrances: 1}, 3: {number: 3, occurrances: 1}}
// At cycle 4: accumulator = {1: {number: 1, occurrances: 1}, 2: {number: 2, occurrances: 1}, 3: {number: 3, occurrances: 1}}, currentValue = 2 → returns {1: {number: 1, occurrances: 1}, 2: {number: 2, occurrances: 2}, 3: {number: 3, occurrances: 1}}
// At cycle 5: accumulator = {1: {number: 1, occurrances: 1}, 2: {number: 2, occurrances: 2}, 3: {number: 3, occurrances: 1}}, currentValue = 4 → returns {1: {number: 1, occurrances: 1}, 2: {number: 2, occurrances: 2}, 3: {number: 3, occurrances: 1}, 4: {number: 4, occurrances: 1}}
// At cycle 6: accumulator = {1: {number: 1, occurrances: 1}, 2: {number: 2, occurrances: 2}, 3: {number: 3, occurrances: 1}, 4: {number: 4, occurrances: 1}}, currentValue = 1 → returns {1: {number: 1, occurrances: 2}, 2: {number: 2, occurrances: 2}, 3: {number: 3, occurrances: 1}, 4: {number: 4, occurrances: 1}}
// At cycle 7: accumulator = {1: {number: 1, occurrances: 2}, 2: {number: 2, occurrances: 2}, 3: {number: 3, occurrances: 1}, 4: {number: 4, occurrances: 1}}, currentValue = 5 → returns {1: {number: 1, occurrances: 2}, 2: {number: 2, occurrances: 2}, 3: {number: 3, occurrances: 1}, 4: {number: 4, occurrances: 1}, 5: {number: 5, occurrances: 1}}
// At cycle 8: accumulator = {1: {number: 1, occurrances: 2}, 2: {number: 2, occurrances: 2}, 3: {number: 3, occurrances: 1}, 4: {number: 4, occurrances: 1}, 5: {number: 5, occurrances: 1}}, currentValue = 3 → returns {1: {number: 1, occurrances: 2}, 2: {number: 2, occurrances: 2}, 3: {number: 3, occurrances: 2}, 4: {number: 4, occurrances: 1}, 5: {number: 5, occurrances: 1}}
// At cycle 9: accumulator = {1: {number: 1, occurrances: 2}, 2: {number: 2, occurrances: 2}, 3: {number: 3, occurrances: 2}, 4: {number: 4, occurrances: 1}, 5: {number: 5, occurrances: 1}}, currentValue = 4 → returns {1: {number: 1, occurrances: 2}, 2: {number: 2, occurrances: 2}, 3: {number: 3, occurrances: 2}, 4: {number: 4, occurrances: 2}, 5: {number: 5, occurrances: 1}}
// At cycle 10: accumulator = {1: {number: 1, occurrances: 2}, 2: {number: 2, occurrances: 2}, 3: {number: 3, occurrances: 2}, 4: {number: 4, occurrances: 2}, 5: {number: 5, occurrances: 1}}, currentValue = 2 → returns {1: {number: 1, occurrances: 2}, 2: {number: 2, occurrances: 3}, 3: {number: 3, occurrances: 2}, 4: {number: 4, occurrances: 2}, 5: {number: 5, occurrances: 1}}
// At cycle 11: accumulator = {1: {number: 1, occurrances: 2}, 2: {number: 2, occurrances: 3}, 3: {number: 3, occurrances: 2}, 4: {number: 4, occurrances: 2}, 5: {number: 5, occurrances: 1}}, currentValue = 1 → returns {1: {number: 1, occurrances: 3}, 2: {number: 2, occurrances: 3}, 3: {number: 3, occurrances: 2}, 4: {number: 4, occurrances: 2}, 5: {number: 5, occurrances: 1}}



const arr = [1, 2, 3, 2, 4, 1, 5, 3, 4, 2, 1];

function countOccurrences(arr) {

    //  the reduce method processes each number in the array and accumulates an object where each key is a number from the array and its value is an object containing the number and its occurrences.
    const result = arr.reduce((acc, curr) => {
        if (!acc[curr]) {
            acc[curr] = {number: curr, occurance: 0};
        }
        // the object associated with that element.
        acc[curr].occurance++; // increase the occurance property of acc[curr] by 1.
        return acc;
    }, 
    {});
    return result;
}

// call function
console.log(countOccurrences(arr));

console.log("\n===========================\n")




/**
 * 
 * Assignment 3: Write a function that checks if a word is exactly the same when spelt forward and bakwardss
 */


function isReverseable(word) {
    // splits the string into an array of characters,
    // reverse the array, then join it back into a string
    const reversedWord = word.split("").reverse().join("");

    // Compare the original word with the reversed version
    // Returns true if they are the same, otherwise false
    return word === reversedWord;
}


// check words
console.log(isReverseable("madam"));
console.log(isReverseable("tears"))
console.log(isReverseable("deed"))