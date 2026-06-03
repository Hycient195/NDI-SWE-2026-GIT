/*
    An object method is a proerty that contains a function definition.

    There are 2 categories of object methods, the first
    is custom methods and the second is instance methods
    
    Custom methods are those we build inside our own object, while static object methods,
    are javascript's build-in functionaties on the Object class constructor.
*/

const user = {
    name: "Samuel",
    nickname: "Sammy",
    age: 23,
    isOnline: false,
}

/* ========= Object.keys() ========= */
const userKeys = Object.keys(user)
console.log(userKeys)


/* ========= Object.valu7es() ========= */
const userValues = Object.values(user);
console.log(userValues)


/* ========= Object.entries() ========= */
const userEntries = Object.entries(user)
console.log(userEntries)

/* ========= Object.fromEntries() ========= */
const userObjFromEntries = Object.fromEntries(userEntries) // reverses Object.entries()
console.log(userObjFromEntries)


/* ========= Object.assign() ========= */
const source = { langauge: "French", country: "France" }
const source2 = { theme: "dark", notifications: true }
const finalDestinationObject = Object.assign({}, source, source2); // copies content of source object into destination object
console.log(finalDestinationObject)


/* ========= Object.freeze() ========= */
// This freezed the object completely, preventing addition, edition or deletion of object properties.
const obj = {
    name: "Kola"
}

Object.freeze(obj);

obj.newPropety = "Something"
obj.name = "Ben"

console.log(obj)


/* ========= Object.seal() ========= */
// This prevents adding or removing properties, but lets you modify the values of existing properties
const obj2 = {
    sport: "Soccer"
}

Object.seal(obj2)

obj2.sport = "Badminton"
obj2.title = "New tiele" // This is not allowed after sealing an object

console.log(obj2)



/* ====== Deletng object properties */
const objWithProperties = {
    location: "123 Chi drive",
    postalCode: 300144
}

delete objWithProperties.postalCode;

console.log(objWithProperties)