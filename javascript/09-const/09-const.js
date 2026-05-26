/* Constants with "Const" keyword */
const pi = 3.14;
let r = 5

r = 8

r = 12;

// pi = 5.26; /* Wrong practice. Never reassign a const value */

const circumference = 2 * pi * r;

console.log(circumference);


// immutability

const user = {
    firstName: "Jane",
    lastName: "Simons",
    age: 67
}

user.firstName = "Janice"

/* Cannot overwrite root definition of const object */
// user = {
//     firstName: "Janice",
//     lastName: "Simons",
//     age: 67
// }

console.log(user.firstName);


const sports = ["Football", "Basketball", "Tennis"];

sports[2] = "Cricket";

/* Cannot overwrite root definition of const array */
// sports = ["Baseball", "Ice Hockey"]

console.log(sports);