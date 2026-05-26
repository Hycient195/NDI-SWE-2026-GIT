const age = 22;
const isCitizen = false;

/*
    // Problem Statement

    We only want individuals who are citizens and above the age of 18 to vote.
    Write a simple console program that implements this.

*/

if (age < 18) {
    if (isCitizen === true) {
        console.log("You are eligible to vote");
    } else {
        console.log("You may not vote as you are not a citizen");
    }
} else {
    console.log("You are not old enough to vote");
}