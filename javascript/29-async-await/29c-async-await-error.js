/* Practical example of the use of the async keyword on a function, and awaiting a promise function */
const promise = new Promise((resolve, reject) => {
    let willGetFruitJuice; // Promise is pending; undecided if I'll get the fruit juice

    setTimeout(() => {
        willGetFruitJuice = false;

        if (willGetFruitJuice) {
            resolve("Fruit Juice bought")
        } else {
            reject("Unable to get fruit juice")
        }
    }, 2000);
})


try {
    const fruitJuice = await promise;
    console.log(fruitJuice);
} catch (error) {
    console.log(error)
} finally {
    console.log("Runs regardless of resolve or reject")
}
