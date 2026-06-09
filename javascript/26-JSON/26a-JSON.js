
/*
    JSON stands for JavaScript Object Notation.

    It is a lightweight text-based data format used to store and exahange structured data.
*/

const obj = {
    name: "Sam Keller",
    age: 20,
    isOnline: false,
    hobbied: ["singing", "dancing"],
    address: {
        street: "123 Chi Drive",
        postalCode: 60001
    }
}

const objInJson = `{
    "name": "Sam Keller",
    "age": 20,
    "isOnline": false,
    "hobbies": ["singing", "dancing"],
    "address": {
        "street": "123 Chi Drive",
        "postalCode": 60001
    } 
}`

// In JSON, object properties must be wrapped in double quotes

console.log(obj)
console.log(objInJson)

/* Converting object to JSON string using JSON.stringify() */
const objJSONString = JSON.stringify(obj)
console.log(objJSONString)


/* Converting back a JSON string back to a JavaScript Object */
const backToOriginalObject = JSON.parse(objJSONString)

console.log(backToOriginalObject)



/* Working with JSON safely */
const wrongJSONString = objJSONString.slice(2) // mutated JSON string
console.log(wrongJSONString)

let conversionResult = ""
try {
    conversionResult = JSON.parse(wrongJSONString)
} catch {
    conversionResult = "Error converting json"
}

// Always place JSON pasing implementations in a try-catch block

console.log(conversionResult);



/* Working with External JSON file */
import jsonData from "./data.json" with { type: "json" };

console.log(jsonData)