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