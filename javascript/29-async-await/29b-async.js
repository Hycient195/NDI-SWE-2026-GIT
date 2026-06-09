


/* A basic async function that returns a promise */
async function greet() {
    return "Hello User"
}

/* Using the async function with the await keyword to await a promise */
const result = await greet()
console.log(result);




/* Practical example of the use of the async keyword on a function, and awaiting a promise function */
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


async function returnFruitJuice() {
    const fruitJuice = await promise;
    return fruitJuice;
}


const finalResult = await returnFruitJuice()

console.log(finalResult)