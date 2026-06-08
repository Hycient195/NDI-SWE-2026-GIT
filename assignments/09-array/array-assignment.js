/* Question 1 
 Question 1
Given an array of product objects in a user cart, write a function that takes in an array of
product objects, and returns the sum of the prices multiplied by the quantity of all the items

>> object signature is
>>    const userCart = { itemName: string; price: number, quntity: number }[]



## Question 2
Given an array of numbers with some numbers repeated, write a function that takes in
an array of numbers, and returns a object in the signature below, showing each number, 
and how many times occours in the array

input (array) -> output (object)

>> object signature sample
>>    input -> [3, 5, 6, 7, 3, 4, 8, 3, 4]
>>    output ->  { number: 3, occourence: 5, number: 2, occourence: 7, number: 7, occourence: 1 }


## Question 3
Write a function that checks if a word is exactly the same when spelt forward and backwards

sample: rever === rever -> true
*/

/*
At lifecycle 1: The function receives an array of product objects (userCart).

At lifecycle 2: The reduce() method initializes the accumulator (total) to 0.

At lifecycle 3: The function iterates through each product object in the array.

At lifecycle 4: For each product, it calculates the item's total cost by multiplying price by quantity.

At lifecycle 5: The calculated item cost is added to the running total.

At lifecycle 6: After all items have been processed, the function returns the final total cost of the cart.


*/
const userCart = [
  { itemName: "Power Bank", price: 1000, quantity: 7 },
  { itemName: "Phone", price: 5000, quantity: 3 },
  { itemName: "Headphones", price: 2000, quantity: 1 }
];

function calculateCartTotal(cart) {
  return cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}

console.log(calculateCartTotal(userCart)); 


/* Question 2 */
/* At lifecycle 1: The function receives an array of numbers (arr) as input. */
/* At lifecycle 2: The function creates an empty object called result.
This object will be used to store each number and the number of times it appears in the array. */
/* At lifecycle 3: The map() method iterates through each number in the array one at a time.
The first number processed is: */
/* At lifecycle 4: For each number, the function checks whether that number already exists as a key in the result object.*/
/* At lifecycle 5: As each number is processed, its occurrence count is updated in the result object. */
/* At lifecycle 6: After all numbers have been processed, the function returns the completed result
 object containing each number and its total occurrence count. */

const countOccurrences = (arr) => {
  const result = {};

  arr.map((num) => {
    if (result[num]) {
      result[num]++;
    } else {
      result[num] = 1;
    }
  });

  return result;
};

console.log(countOccurrences(numbers));



/*
At lifecycle 1: The function receives the word "never".
At lifecycle 2: The word is split into individual letters.
At lifecycle 3: The letters are reversed.
At lifecycle 4: The reversed letters are joined back into a word.
At lifecycle 5: The original word "never" is compared with the reversed word "reven".
At lifecycle 6: Since both are not the same, the function returns false.
*/

function checkWord(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

console.log(checkWord("never")); // false

