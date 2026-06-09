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

// promise
//     .then((res) => {
//         console.log(res) // Runs when the promise is sucessful | fulfilled | resolved
//     })

/* Async Await */

/*
    The "await" keyword enables us to wait for an uncompleted promise to complete, before we can make use of
    its resolved or rejected value
*/


const response = await promise

console.log(response)