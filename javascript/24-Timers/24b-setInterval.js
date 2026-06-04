/*
    The setInterval() method is used tocreate an implementation that repeatedly
    calls a function or executes a code with a fixed time delay in-between each
    call.

    setInterval(callback, delay-in-ms, ...other-params-provided-to-callback)
*/

setInterval(() => {
    console.log("Welcome home");
}, 2000);


/* setInterval with 2+ arguments */
setInterval((arg) => {
    console.log(`Welcome ${arg}`)
}, 2000, "James")



/* setInterval with with its cleanup function/implementation */
let count = 0;
const maxCount = 5;

const interval = setInterval(() => {
    console.log(`Number of executions: ${count}`)
    count++

    if (count === maxCount) {
        clearInterval(interval) // interval counter runs only 5 times, and exits
    }
}, 2000);