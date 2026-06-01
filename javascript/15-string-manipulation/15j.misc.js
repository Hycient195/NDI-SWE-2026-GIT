const char = "A";

// This is used to return the numerical charcter representation of a character
const charCode = char.charCodeAt(0);

console.log(charCode);

console.log("😁".charCodeAt());




// Write a function, that accepts 2 charcters and returns true if the
// first argument occours before the second argument in the 
// Alphabetical order


function compareChar(char1, char2) {
    return char1.toLowerCase().charCodeAt() < char2.toLowerCase().charCodeAt();
}

const result = compareChar('a', 'C');

console.log(result);



/* ===== Converting back from character code to character using String.fromCharCode() */

const charFromCode = String.fromCharCode(65)

console.log("65 from character code", charFromCode);

// Normalization