/**
 * 
 * Assignment 1: Given an array of product objects in a user cart, write a function that in an array of product objects, and returns the sum of the prices multiplied by the quantity of all the items in the cart.
 * 
 *  >> object signature is
    >>    const userCart = { itemName: string; price: number, quntity: number }[]
 */

const userCart = [
    { itemName: "Laptop", price: 1000, quantity: 2 },
    { itemName: "Phone", price: 500, quantity: 3 },
    { itemName: "Headphones", price: 900, quantity: 5 }
];

function calculateTotalPrice(userCart) {
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


const arrayOfNumbers = [3, 5, 6, 7, 3, 4, 8, 3, 4, ];

function countOccurrences(arraryOfNumbers) {

const count = arraryOfNumbers.reduce((acc, curr) => {
    if (!acc[curr]) {
        acc[curr] = {number: curr, occurance: 0};
    }
    acc[curr].occurance++;
    return acc;
}, {});
return count;
}

console.log(countOccurrences(arrayOfNumbers));

console.log("\n===========================\n")
/**
 * 
 * Assignment 3: Write a function that checks if a word is exactly the same when spelt forward and bakwardss
 */

function isReverseable(word) {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}

console.log(isReverseable("madam"));
console.log(isReverseable("tears"))
console.log(isReverseable("deed"))