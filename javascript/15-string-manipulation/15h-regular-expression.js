/* ======== Regular Expression (RegExp | RegEx | Pattern) ========== */

/[a-z]/ // Basic syntax of a regular expression. It starts with a forward slash,
// and contains may end with a a forward slash also

// .match() .test()


const text = "My phone number is 12345678";

const hasNumeric = text.match(/\d+/);
const alpha = text.match(/[a-z]/gi)

console.log(hasNumeric);
console.log(alpha);

// Test is used to retur a boolean result that checks if the evaluation of a
// regular expression exists within a string


const sentence = "Javascript is simple";
const jsRegExp = /Javascript/
const numRegExp = /[A-Z]/

const stringExists = jsRegExp.test(sentence);
const numberExists = numRegExp.test(sentence);

console.log("String exists", stringExists);
console.log("Number exists?", numberExists);