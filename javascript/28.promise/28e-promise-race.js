
/* Promise.race() */

/* This returns the first completed promise */

const userPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("User Exists")
    }, 3000);
})

const postsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("All posts fetched")
    }, 2000);
})

const commentsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("All comments fetched")
    }, 4000);
})

Promise.race([ userPromise, postsPromise, commentsPromise ])
    .then((res) => {
        console.log(res)
    })
