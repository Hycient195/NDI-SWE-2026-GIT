/* Promise.allSettled() */

/* This returns the results of all promises, irrespective of resolved or rejected */

const userPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("User Exists")
    }, 3000);
})

const postsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Unable to fetch post")
    }, 2000);
})


Promise.allSettled([ userPromise, postsPromise ])
    .then((res) => {
        console.log(res)
    })