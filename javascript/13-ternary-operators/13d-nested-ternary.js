/*

    Nested ternary just like nested conditionaly are used to evaluate
    a condition inside of another condition

    Syntax

    condition 1
        ? true expression 1
        : condition 2
            ? true expression 2
            : false expression 2

*/

/*
    // Problem Statement

    We only want individuals who are citizens and above the age of 18 to vote.
    Write a simple console program that implements this.

*/

const age = 14;
const isCitizen = false;

const elibibilityMessage = (age < 18)
                                ? "You are not old enough to vote"
                                : (isCitizen)
                                    ? "You are eligible to vote"
                                    : "You may not vote as you are not a citizen"

console.log(elibibilityMessage);



/* Do's of Ternary Operators */
/*
    1. Use for simple logic
    2. Use only when two outcomes exist
    3. Only use when it help in readability
    4. Use to render UI conditionally
*/

/* Dont's of Ternary Operators */
/*
    1. Avoid deeply nested conditions. Use if-else instead
    2. Avoid when it makes logic hard to read
    3. Avoid when multiple statements are required
*/