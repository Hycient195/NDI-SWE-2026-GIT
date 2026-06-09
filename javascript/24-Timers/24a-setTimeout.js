/*
    The setTimeout() method, executes a callback function exactly after the specified
    number of prescribed time (in milliseconds)

    // Syntax

    setTimeout(callback, time-in-ms-to-execution, argument-to-callback)

    Study: The javascript callstack and memory lead due to timers
*/

console.log("Start Time!!")

setTimeout(() => {
    console.log("I'm here four seconds after")
}, 4000);


/* Using the setTimeout withh 3 arguments */
const timeoutRef = setTimeout((arg) => {
    console.log(`Welcome back ${arg} after your network outage!`)

    clearTimeout(timeoutRef);
}, 3000, "Elizabeth")

