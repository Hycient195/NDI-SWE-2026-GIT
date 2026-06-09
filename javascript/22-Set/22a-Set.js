const fruitSet = new Set([ "apple", "pineapple", "orange" ])

fruitSet.add("Mango") // Add a new value to a set

fruitSet.delete("pineapple") // Removes an item from a set

console.log(fruitSet.size) // Getting the size (length) of a map

console.log(fruitSet)


/* ====== Converting a set to an array ====== */
const fruitArray = [ ...fruitSet ]; // Approach 1
console.log(fruitArray);

const fruitArr = Array.from(fruitSet) // Approach 2
console.log(fruitArr)


/* ====== Looping through a Set ====== */
/* Using for loop */

for (const key of fruitSet) {
    console.log("For loop", key)
}

fruitSet.forEach((item) => {
    console.log("For each loop", item)
})


/* ====== Converting from an array to a Set ====== */
const arr = [1,2,3,2,5,5,7, 1, 2];

const arrSet = new Set(arr);

console.log(arrSet)


/*
    Advantages of Set over Array

    1. Allows us to have a collection with unique values (ie: no repeated items in the collection)
    2. Casting an array into a set immediately removes all duplicates in the array
    3. It has a better performance for large dataset
    4. Faster deletion of items, because it doesn't traverse through the entire collection, just to remove 
        one single item.
*/