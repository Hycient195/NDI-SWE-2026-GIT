/* Specific characters in strings cannot be directly overwritten because string are immutable */

const word = "Mango";

word[0] = "K";

// const first = word[0];

console.log(word)


const newWord = word.replace("M", "K")

console.log(newWord)