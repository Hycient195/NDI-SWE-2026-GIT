/*
    The nullish coalescing operator is simply an operator that returns the right hand side of its
    operand, when it left hand size is strictly null or undefined.

    The nullish coalescing operator is denoted by the double question mark symbol
    "??"
*/

const isOnline = null;

const isUserOnline = isOnline ?? "Yes";

console.log(isUserOnline)


/* ===== How it differs from the logical OR operator */

const orIsUserOnline = isOnline || "Yes"

console.log(orIsUserOnline)


/*
    The major difference between the nullish coalescing operator and the logical OR
    is that the logical or returns the right hand operator if the left hand is any
    falsy value, wheras the nullish coalescing operator returns the right hand only
    if the left hand operand is strictly null or undefined
*/