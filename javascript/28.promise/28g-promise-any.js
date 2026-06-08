/* Promise.any() */

/* This returns the first sucessful promise */

const userPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("User does not exist")
    }, 3000);
})

const postsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Unable to fetch post")
    }, 2000);
})

const commentsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("All comments fetched")
    }, 4000);
})


Promise.any([ userPromise, postsPromise, commentsPromise ])
    .then((res) => {
        console.log(res)
    })