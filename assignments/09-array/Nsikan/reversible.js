function isWordReverse(word) {

    let lowerWord = word.toLowerCase()
    let reversedWord = lowerWord.split("").reverse().join("");

    return lowerWord === reversedWord;
}

console.log(isWordReverse("level")); 
console.log(isWordReverse("hello")); 
console.log(isWordReverse("Madam"))