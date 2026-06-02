/*
    Write a function that takes a string in lowercase, and make
    the first character uppercase and returns it
    ie "javascript" -> "Javascript"
*/

function firstToUpper(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(firstToUpper("javascript"));


/*
    Write a function that takes an email, shows only the first 4
    characters, and masks the rest with an asterix "*"
    Sample: "jamesjohn@gmail.com" -> "jame************"
*/

const maskEmail = (email) => {
    const visible = email.slice(0, 4);
    const asterixLength = (email.length - 4);
    return visible + "*".repeat(asterixLength)
}


const maskEmail2 = (email) => {
    return email.slice(0, 4) + "".padEnd(email.slice(4).length, "*")
}

console.log(maskEmail("gracejones@gmail.com"));
console.log(maskEmail("jamesjohn@gmail.com"));

console.log(maskEmail2("jamesjohn@gmail.com"));

// create a constant showing visible part



// slice index 0 to 3
// slice(4)
// concatenate slice return 