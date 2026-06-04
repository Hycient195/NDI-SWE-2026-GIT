
console.log("Hello world");


const age = 15

try {
    if (age < 18) throw new Error("Error casting vote") // Throwing a custom Error
    castVote()
} catch (error) {

    // Catching our custom error gracefully
    console.log("Click here to learn how to vote when you become of age")
}


const castVote = () => {
    console.log("Your vote has been casted sucessfully!")
}

/*
    The try-catch block only intercepts/catches errors that occour while
    the program/engine is running or executing, and cannot catch the error
    places inside a setTimeout calback after the try block as finished executing
*/