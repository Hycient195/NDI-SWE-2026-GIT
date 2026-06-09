/* ==== Basic Destructuring ===== */
const user = { name: "Manuel", role: "Developer", age: 25 }

const { name } = user;

console.log(name) // This means the same as the syntax below it
console.log(user.name)


/* ==== Renamed Destructuring ===== */
const user2 = { name: "Manuella", role: "Analyst", age: 27 }

const { name: user2Name } = user2;

console.log(user2Name)


/* ==== Destructuring with default values, used as fallback ===== */
const config = { theme: undefined, isSidebarVisible: false };

const { theme = "dark" } = config; // default value "dark" for non existent theme value

console.log(theme)



/* ==== Destructuring with "rest" syntax ===== */
const numbers = { one: "One", two: "Two", three: "Three", four: "Four", five: "Five" };

const { one, five, ...otherNumbers } = numbers;

console.log(one)
console.log(otherNumbers)