/* ================= Primitive Data Types ============== */

/* Number: This refers to all numeric values, including integers and floating-point numbers. */
let age = 40; /* Integer number */
let point = 6.78; /* Floating point number */

/* String: This refers to a sequence of characters enclosed in single quotes, double quotes, or backticks. */
let firstName = "Annie";
let lastName = 'Joe';
let middleName = `Yales`;

/* Boolean Values: This refers to values that are either true or false. */
let isStudent = true;
let isUnemployed = false;

/* Null: This refers to the intentional absence of any object value. */
let emptyValue = null;

/* Undefined: This refers to a variable that has been declared but has not been assigned a value. */
let noUser = undefined;
let preferredName;
console.log(preferredName);

/* BigInt This refers to a numeric data type that can represent integers with arbitrary precision. */
let bigIntValue = 10n; /* The 'n' suffix indicates that this is a BigInt value */
console.log(bigIntValue);

/* Symbol: This refers to a unique and immutable data type that can be used as an identifier for object properties. */
let uniqueId = Symbol('id');
console.log(uniqueId);  



/* ============== Non-Primitive (Object) Data Types ============= */
/* Object: This refers to a collection of key-value pairs, where each key is a string and each value can be any data type. */
let user1 = {
    firstName: "John",
    lastName: "Smith",
    middleName: "Carlgon",
    age: 30,
    isEmployed: true,
    email: "johnsmith@email.com",
    address: null,
    hobbies: ["Cycling", "Snowballing", "Wakeboarding", "Gliding"],
    address: {
        street: "123 Address drive",
        city: "PortHarcourt"
    }
}
console.log(user1.hobbies[2])

let user2 = {
    firstName: "Jane",
    lastName: "Smith",
    middleName: "Annie",
    age: 29,
    isEmployed: false,
    email: "janesmith@email.com",
    address: null,
    hobbies: ["Swimming", "Travelling", "Cooking", "Cycling"],
}
console.log(user1);
console.log(user2.middleName);


/* Array: This refers to an ordered collection of values, where each value can be any data type. */
let hobbies = ["Swimming", "Travelling", "Cooking", "Cycling", "Swimming"]; /* One value type array */
let randomTypes = ["Food", false, 14, null, undefined, { name: "Saturn", age: 40 }, [1, 2, 3]]; /* Mixed value type array */
console.log(hobbies);
console.log(randomTypes[0])
console.log(randomTypes[6][1]);
console.log(randomTypes[5].name);


/* Function: This refers to a block of code that performs a specific task when called. */
const doSomething = function() {
    console.log("This is a function");
}
doSomething();


/* Date: This is a data type used to work with dates and times. */
let now = new Date();
console.log(now)


/* Regular Expression (RegEx, RegExp): This is a data type used to work with string patterns */
let allAlpha = /[a-zA-Z]/ig;


/* Set: This is a data type used to store a collection of unique values. */
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); /* This will not be added to the set because it is a duplicate value */
console.log(mySet);

/* Map: This is a data type used to store key-value pairs, where each key is unique. */
let myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key1", "value1");
console.log(myMap);