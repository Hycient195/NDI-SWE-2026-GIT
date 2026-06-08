/*
    A Promise represents a value that may be available "now", "later", "never"


    A promise to get fruit juice on my way back from work


    A Promise has 3 states, which are:

    Pending -> I'm still at work and not back, I have neither fulfilled or not fulfilled my promise

    Fulfilled | Resolve -> Get the fruit juice on my way back

    Rejected -> Did not get the fruit juice on my way back
*/


/* Basic syntax of a Promise */
const promise = new Promise((resolve, reject) => {
    let willGetFruitJuice; // Promise is pending; undecided if I'll get the fruit juice

    setTimeout(() => {
        willGetFruitJuice = true;

        if (willGetFruitJuice) {
            resolve("Fruit Juice bought")
        } else {
            reject("Unable to get fruit juice")
        }
    }, 2000);
})

/* ========== Comsuming a Promise ========== */
promise
    .then((res) => {
        console.log(res) // Runs when the promise is sucessful | fulfilled | resolved
    })
    .catch((err) => {
        console.log(err) // Runs when the promise is rejected | not sucessful | failed
    })
    .finally(() => {
        console.log("All operations are complete"); // Runs regardless of success or failure, as long as promise has completed execution
    })


console.log(promise)

setTimeout(() => {
    console.log(promise)
}, 2500);