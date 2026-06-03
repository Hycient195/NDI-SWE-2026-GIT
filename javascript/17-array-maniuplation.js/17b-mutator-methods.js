/*
    These are methods that change the original array directly.
    They are called mutator methods because they muate the original array.

    Note: If you use these methods, the original data is altered.

    1. .push() - adds an item to the end of the array
    2. .unshift() - adds an item to the beginning of the array
    3. .pop() - removes the last item from the end of the array
    4. .shift() - removes the first item from the beginning of the array
*/

let hobbies = ["Swimming", "Cycling", "Hockey"];

console.log("Length of hobbies is", hobbies.length);

/* .push() used to inser item into an array from the end | of the array right */
hobbies.push("Air Hockey");
console.log("Pushed 'Air Hockey'", hobbies);

/* .unshift() used to add an item from the beginning | of the array left */
hobbies.unshift("Running");
console.log("Unshifted 'Running'", hobbies);

/* .pop() removes the last item at the end | right of the array */
hobbies.pop();
console.log("Popped or removed last item item 'Air Hockey'", hobbies);

/* .shift() removes the first item at the start | left of the array */
hobbies.shift();
console.log("Shifted or removed first item 'Running'", hobbies);


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/* .splice(startIndex, amount-to-remove, items-to-add...) */
months.splice(1, 3);
console.log("Spliced months from index 1 to 3", months);

months.splice(0, 1, "Jan")
console.log(months)

months.splice(1, 3, "Orange", "Mango", "Pear");
console.log(months);

// using negative index to work from end to start
months.splice(-2, 2);
console.log(months)


/* .reverse() used to reverse the order of items in the array */
const arr = [1,2,3,4,5];
arr.reverse();
console.log(arr)




/* .fill(): This is used to fill all elements of an array with a static value */
arr.fill(0); // filling all values with a prescribed value of 0
console.log(arr)

arr.fill("Go", 1, 4); // filling values from index 1 to 3 without including index 3 with "Go"
console.log(arr)



/* .sort(): This is used to sort the elements of an array */
const unsortedArr = [5, 3, 8, 1, 4];
unsortedArr.sort(); // sorts the array in ascending order by default
console.log(unsortedArr)

unsortedArr.sort(function(a, b) { // sorting in descending order using a custom compare callback function
    return b - a;
})
console.log(unsortedArr);


const alpha = ['B', 'D', 'A', 'E', 'C'];
alpha.sort();
console.log(alpha)


alpha.sort((a, b) => b.localeCompare(a))
console.log(alpha)

