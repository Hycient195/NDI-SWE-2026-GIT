
/*
    For loop syntax;

    for (initialization; condition; afterthought | increament | decreament) {
        // code to be repeated is contained here
    }


    Initialization is where you create the variable to control how many time your loop would run

    Condition is where you specify the condition that must be met for the loop to continue running.

    Afterthought is where you specify how the variable created in the initialization should be updated after each iteration of the loop.
    This is typically where you would increment or decrement the variable to ensure that the loop eventually terminates when the condition
    is no longer met.

    The variable used to control how many times our loop runs is referred to as our "iterant" or loop counter.

*/


/* Problem Statement: Write an implementation that counts from numbers 0 to 10 using a for loop */

/* 

    "let i = 0; i <= 10; i++" is called a loop control statement, and it consistes of the initilization,
    condition and afterthought

    Always ensure that your control statement is air-tight to prevent race-condition and infinite loops.
    Loops should always be used with caution.

*/

for (let i = 0; i <= 10; i++) {
    console.log(i)
}




/*
    Example of an infinite loop without a proper control statement.
    Always avoid implicit or explicit implementation of infinite loops
*/

// for (true;;) {
//     console.log(Math.random())
// }

// let i = 10; i <= 10; i--  Nsikan
// let i = 10; i >= 0; i--  Elizabeth | Chidiebube | Ephraim | Mark

for (let i = 1; i <= 10; i++) {
    console.log("Welcome!");
}

for (i = 10; i >= 0; i--) {
    console.log(i)
}


// 10 -> Initilization
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0 -> Termination condition



/* ============ Nested Loops ============= */

/*
    The number of execution times in the innermost loop in a nested loop is a multiplication of the number of times of
    execution in the outer loop multiplied by the nuver of execution timen in the inner loop

    iteration ^ n; For nested loops with the same iteration count, the loop executes iteration ^ n.
    where n is the number nesting layers
*/

console.log("\n==============================\n")

console.log("Beginning")

for (let i = 0; i <= 2; i++) {

    console.log("Start")

    for (let j = 0; j <= 4; j++) {
        console.log(`Outer ${i}, Inner ${j}`)
    }

    console.log("End")
}
console.log("Finished")


/* ========= Loop With Arrays =========== */
const scores = [90, 80, 70, 60, 50, 40, 30, 20, 10];

console.log("\n==============================\n")

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

console.log("\n==============================\n")

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i] + 9);
}

console.log("\n==============================\n")

/* ====== Nested Loops with Nested Array ======= */

const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]

// numbers[0][1]

for (let outer = 0; outer < numbers.length; outer++) {

    for (let inner = 0; inner < numbers[outer].length; inner++) {

        console.log(numbers[outer][inner]);

    }

}

console.log("\n==============================\n")


/*
    Problem Statement: We have 3 colors of shoes, and 4 sizes.
    Write a program that genrates every possible combiniation
    of every shoe size in every color.
*/

const sizes = ["S", "M", "L", "XL"];
const colors = ["Gray", "Brown", "Black"]

for (let colorIndex = 0; colorIndex < colors.length; colorIndex++) {

    for (let sizeIndex = 0; sizeIndex < sizes.length; sizeIndex++) {

        console.log(`Here is a ${colors[colorIndex]} shoe in ${sizes[sizeIndex]} size`);

    }

}