
/* ============================== */
/* =========== .map() =========== */
/* ============================== */

/*
    This is used to run a function for each item in an array, and return a new
    array holding the result of the operation done on each item in the array
*/

const arr = [1, 2, 3, 4];

const arrTimesTwo = arr.map(num => num * 2);

console.log(arrTimesTwo);

/* Explanation of operation */
// After 1st cycle | iteration ->  [2, 2, 3, 4] item at index [0] is muliplied by 2, and the rest are unchanged.
// After 2nd cycle | iteration ->  [2, 4, 3, 4] item at index [1] is muliplied by 2, and the rest are unchanged.
// After 3rd cycle | iteration ->  [2, 4, 6, 4] item at index [2] is muliplied by 2, and the rest are unchanged.
// After 4th cycle | iteration ->  [2, 4, 6, 8] item at index [3] is muliplied by 2, and the rest are unchanged.





/*
    Problem Statement:
        Find the credit rating of each user, obtained by muliplying their age and their account balance
*/

const usersArray = [
    { name: "Alice", age: 25, accountBalance: 1000 },
    { name: "Bob", age: 30, accountBalance: 1500 },
    { name: "Charlie", age: 35, accountBalance: 2000 },
    { name: "David", age: 40, accountBalance: 2500 },
]

const enhancedUsersArray = usersArray.map(user => {
    return {
        name: user.name,
        age: user.age,
        accountBalance: user.accountBalance,
        creditRating: user.age * user.accountBalance
    }
})

console.log(enhancedUsersArray);




/*
    Problem Statement:
        Given an array of strings in lowercase, format the strings that the first letter of each is
        capital letter
*/

const places = ["ijebu-ode", "ogbomosho", "akure", "benin-city", "sapele"];

const newPlaces = places.map(place => place[0].toUpperCase() + place.slice(1));

console.log(newPlaces)




/*
    Problem statement:
        Given an array of user object with several properties, return only the names from the objects
*/

const names = usersArray.map(user => user.name);

console.log(names)
