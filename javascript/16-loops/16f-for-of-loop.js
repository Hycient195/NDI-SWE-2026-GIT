/*

    for....of loop syntax

    for (variable of iterable) {
        // code be executed
    }

*/

const superHeroes = ["Sango", "Amadi", "Ala", "Eze", "Orisa"];

for (const superHero of superHeroes) {
    console.log(superHero)
}


/* =========== Looping through a nested array using the for-of loop =========== */

const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]

for (const outer of numbers) {
    
    for (const inner of outer) {
        console.log(inner)
    }
}