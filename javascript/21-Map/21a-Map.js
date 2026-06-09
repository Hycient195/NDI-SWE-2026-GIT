/*
    A Map is a collection of keyed data items.

    Its is similar to an object,, but however, it allows keys of any type, including functions, 
    object or primives, and preserves insertion order.

    Maps perform better in scenarios involving frequent additions and removals
*/

const userMap = new Map(); // Creating a Map

userMap.set("name", "Kenule");
userMap.set("age", 20);
userMap.set("address", "New Haven 042");


const userName = userMap.get("name");

console.log(userMap.get("name")) // 

console.log("Map size", userMap.size) // Obtaining the number of items inour map

userMap.delete("age") // Deletes an entry from the map object

console.log(userMap)

function greet() {
    return "Hello User"
}

userMap.set(greet, { greetValue: 34 }) // Using a function as a map key

console.log(userMap.get(greet)) // Accessing a map property whoose key is a function

/*
    Advantages of Map() over objects

    1. Allows any data type as a property key
    2. More performant in frequest addition and removal of key-value pairs
    3. It allow the user to read the size of the Map instrantly using the 
        "size" property, wheras object requires you to loop through, to get
        its number of properties
*/


const userKeys = Array.from(userMap.keys()) // Accessing all keys of a map. Same applies to values using the .value() method

console.log(userKeys)

/* Looping through Maps using for loop */
for (const key of userMap.keys()) {
    console.log("Map key", key)
}

userMap.forEach((item) => {
    console.log("ForEach loop", item)
})