function isWordReverse(word) {
    let reversedWord = word.split("").reverse().join("");

    return word === reversedWord;
}

console.log(isWordReverse("level")); 
console.log(isWordReverse("hello")); 
console.log(isWordReverse("madam"))