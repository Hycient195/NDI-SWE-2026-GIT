/*

    for...in loop syntax

    for (variable in object) {
        // code to be executed in the loop
    }

*/

const user = {
    firstName: "Samuel",
    lastName: "Smith",
    age: 30,
    address: {
        street: "145 Green Street",
        city: "Lagos",
        state: "NG",
        zip: "600001"
    }
}

for (let key in user) {
    // console.log("Key:", key); // Acessing the keys | properties of the object in the loop
    // console.log("Value", user[key]); // Accessing the values of the object in the loop using bracket notation.
    console.log(`${key}: ${user[key]}`) // Using template literals to print the key and value in a formatted way.
}


console.log("\n=======================================\n")

/* ====== Nested for...in loops ======== */

for (let key in user) {
    if (typeof user[key] === "object") {
        for (let innerkey in user[key]) {
            console.log(`${innerkey}: ${user[key][innerkey]}`)
        }
    }
}