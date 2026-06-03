
/* ================================= */
/* =========== .filter() =========== */
/* ================================= */
/*
    This returns a new array, that satisfies a condition specified in the callback function of the
    original array, and filters items from the original array that do not satisfy the condition.
*/

/*
    Problem statement:
        Given an array of number, return only the even numbers from the array
*/

const oddAndEvenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = oddAndEvenNumbers.filter(num => num % 2 === 0);

console.log(evenNumbers)



/*
    Problem statement:
        Given an array of fruits, return all fruits that have the letter "an" in their name
*/

const fruits = ["Apple", "Banana", "Pineapple", "Mango", "Orange"];

const filteredFruits = fruits.filter(fruit => fruit.includes("an"));

console.log(filteredFruits)



/*
    Problem statement:
        Given an array of product objects, return all products that are in stock and has a price
        greater than 150 and has currency of Nigerian Naira
*/

const products = [
    { name: "Ceiling Fan", price: 100, currency: "NGN", inStock: false },
    { name: "Table Lamp", price: 200, currency: "NGN", inStock: true },
    { name: "Wall Clock", price: 6, currency: "USD", inStock: true },
    { name: "Floor Mat", price: 9, currency: "GBP", inStock: true },
    { name: "Sofa", price: 500, currency: "USD", inStock: false },
    { name: "Bookshelf", price: 120, currency: "NGN", inStock: true },
    { name: "Dining Table", price: 300, currency: "AED", inStock: true },
]

const filteredProducts = products.filter(product =>
    product.inStock && product.currency === "NGN" && product.price > 150)

console.log(filteredProducts);




/*
    Problem statement:
        Given an array of numbers with duplicates, return a new array with only unique numbers
*/

const numArr = [1, 2, 3, 1, 4, 5, 2, 7, 3];

const uniqueNumbers = numArr.filter((value, index, originalArray) => (
    originalArray.indexOf(value) === index
))

console.log(uniqueNumbers);



/*
    Problem statement:
        Given an array of different data types, return a new array, withh all falsy values removed
*/

const mixedArr = ["Welcome", "", 4, 0, null, { }, false, [ ], undefined, ["hi"], { name: "Sam" }];

const nonFalsyArray = mixedArr.filter(Boolean);

console.log(nonFalsyArray)