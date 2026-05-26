/* ============ String Trimming ============== */
// This is process of removing spaces at various parts of the string.
const userEmail = " john@gmail.com "
const userEmail2 = "john@gmail.com"

console.log(userEmail === userEmail2)

console.log(userEmail.length)

/* a. trim() */
const trimmedUserEmail = userEmail.trim() // Removes spaces at the beginning and end of a string

console.log(trimmedUserEmail.length);


/* b. trimStart() */
/* This is used to remove spaces at the starting of a string */

const myName = "   John  ";
console.log(myName.length)
console.log(myName.trimStart().length);

/* c. trimEnd() */
/* This is used to remove spaces at the ending of a string */

console.log(myName.trimEnd().length);