/*

    Arrow functions give us a clean and concise syntax of implementing functions
    that perform operations inline, and return results at the same time.

*/

const add = (a, b) => {
    return a + b;
}

/* Arrow function implicit return */
const add2 = (a, b) => a + b;

console.log("Add", add(2, 4));
console.log("Add2", add2(2, 4));


// Original Named function
function celc(celcuis) {
    const result = ((celc * (9/5)) + 32)
    return result
}


// One line implcit return arrow function
const celToFah = celc => ((celc * (9/5)) + 32);