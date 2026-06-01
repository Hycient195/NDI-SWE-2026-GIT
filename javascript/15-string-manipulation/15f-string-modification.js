/* === .slice(): Used for extracting parts of a string === */
// Note: .slice() works on both arrays and strings.
const text = "Javascript";

const extract = text.slice(0, 4);
const scriptText = text.slice(4, 10);
const negString = text.slice(-3)

console.log(extract);
console.log(scriptText);
console.log(negString);




/* === .substring(): Thiis is also used to extract parts of a string === */
// .substring() works on only string.
const anotherText = "Carpet";

const anotherExtract = anotherText.substring(0, 3);
const petString = anotherText.substring(3, 6);
// const negAnotherString = anotherText(-3); // Not allowed by .substring()

console.log(anotherExtract);
console.log(petString);
// console.log(negAnotherString);





/* === .replace(): this is used to replace the first occcurence of a substring, with another substring within a string text === */
// Note: .replace() would only replace the first occourence of a substring in a string;
const sentence = "A quick brown fox";
const newSentence = sentence.replace("fox", "wolf");

console.log(newSentence);






/* === .replaceAll() is used to replace all occrences of a substring, within a string === */
const longSentence = "A long journey, in a long vehicle";
const newLongSentence = longSentence.replaceAll("long", "short");

console.log(newLongSentence);





/* === String concatenation is simply the joining of two or more substrings into a single string === */
const firstName = "Jane";
const lastName = "Smith";
const age = 41;

// Using the "+" operator
const fullName = firstName + " " + lastName;
console.log("Concatenation with '+'", fullName);

// Using the .concat() method
const anotherFullName = firstName.concat(" ", lastName);
console.log("Concatenation wtih .concat()", anotherFullName);

// Template Lieterals
// Template literals are only used with the back ticks ``
const userGreeting = `First name is ${firstName} and last name is ${lastName} and age is ${age}`
console.log(userGreeting);

// Multi-line Strings
const lengthyStatement = `this is a long statement,
This is another`
console.log(lengthyStatement);



/* .split(): This uses a delimiter to split a string into an array */
const paragraph = "Javascript is very easy!";

const paragraphArray = paragraph.split(" ");
console.log(paragraphArray);

const letterArray = paragraph.split("");
console.log(letterArray);

const andWord = "I am a King and Prince and Hunter and Butler";
const andWordSplit = andWord.split("and");
console.log(andWordSplit);




/* .join(): This joins an array back to a string */
const paragraphJoin = paragraphArray.join(" ")
console.log(paragraphJoin)

const reconstructedAndWord = andWordSplit.join("or");
console.log(reconstructedAndWord);



/* .repeat(): This is used to repeat a string */
const hello = "Hello! ";
const repeatedHello = hello.repeat(3);
console.log(repeatedHello);


/* String Padding: Repeating of characters at starting and ending of a string respectively */
// .padStart()
const theGood = "7";
const theBest = theGood.padStart(3, "0");
console.log(theBest);


// .padEnd()
const largeFigureString = "9";
const largestFigureString = largeFigureString.padEnd(9, "0");
console.log(largestFigureString);





// Mutation

// Immutable