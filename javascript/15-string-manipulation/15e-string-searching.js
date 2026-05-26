let sentence = "Javascript is incredibly simple!";

console.log("\nSentence is", `"${sentence}"`)

// All of the below are case sensitive.


// include(): This returns a boolean pertaining to if the word in the argument exists in the string called upon.
console.log("Does sentence include 'incredibly'?", sentence.includes("incredibly"));




/* startsWith(): This ascertains if a string starts with a certain substring */
console.log("Does sentence start with 'Javascript'?", sentence.startsWith("Javascript"));




/* endsWith(): This ascertains of a string ends with a certain substring */
console.log("Does sentence end with 'simple!'?", sentence.endsWith("simple!"));




/* indexOf(): This returns the first position of a substring within a string */
console.log("First index of the letter 'i'", sentence.indexOf("i"))



/* lastIndexOf(): This returns the last index of a substring within a string */
console.log("Last index of the letter 'i'", sentence.lastIndexOf("i"))