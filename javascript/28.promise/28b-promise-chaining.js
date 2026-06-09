/* Promise Chaining */
/*
    A promise can return values to the next .then() method through promise chaining
    as seen below.
*/

Promise.resolve(5) // A short-hand sample of an already resolved promise
    .then((res1) => {
        console.log(res1)
        return res1 * 2
    })
    .then((res2) => {
        console.log(res2)
        return res2 * 3
    })
    .then((res3) => {
        console.log(res3)
    })