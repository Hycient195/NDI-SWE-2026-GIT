/* All Primitive Types Are Value Types */
let a = 15;
let b = 15;

let c = b;

let sport = "swimming";
let anotherSport = "swimming";



/* All Non-Primitive Types are Reference Types */
let people = ["John", "Jane", "Doe"];
let students = ["John", "Jane", "Doe"];

let girls = students;

let user1 = {
    name: "Sam",
    age: 25
}

let user2 = {
    name: "Sam",
    age: 25
};

let staff = people;


console.log("is a equal to b?", a === b); /* true: This compares only value */
console.log("is people equal to students?", people === students); /* false: This compares both value and type, and since they are different objects in memory, they are not strictly equal */
console.log("is staff equal to people?", staff === people); /* true: This compares both value and type, and since they reference the same object in memory, they are strictly equal */

console.log("is user1 equal to user2?", user1 === user2); /* false: This compares both value and type, and since they are different objects in memory, they are not strictly equal */
console.log("is sport equal to anotherSport?", sport === anotherSport); /* true: This compares only value, and since they have the same value, they are strictly equal */



/*  */
console.log("\n============================================== \n")

/* Value Type Assignment */
let x = 10
console.log("Initial value of x", x);
let y = x;
console.log("Initial value of y before reassignment:", y);
y = 20;
console.log("Value of y after reassignment:", y); /* This is because y holds a copy of the value of x, and not a reference to the same memory location as x. Therefore, when x is reassigned to a new value, it does not affect the value of y. */
console.log("Value of x after reassignment of y:", x);


console.log("\n============================================== \n")


/* Reference Type Assignment */
let userA = {
    name: "John",
    age: 20
}

console.log("Initial value of userA", userA.name);
let userB = userA;

console.log("Initial value of userB before modification:", userB.name);

userB.name = "Samuel"

console.log("Value of userB after modification:", userB.name);

console.log("Value of userA after modification of userB:", userA.name); /* This is because userB holds a reference to the same memory location as userA. Therefore, when userB is modified, it also modifies the value of userA, since they both reference the same object in memory. */

console.log("\n============================================== \n");