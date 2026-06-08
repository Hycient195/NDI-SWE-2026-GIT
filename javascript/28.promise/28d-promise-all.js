/*
    The Promise.all() waits for all promises to execute before returning the results of all
*/

const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)

Promise.all([p1, p2, p3])
    .then(results => {
        console.log(results)
    })



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

Promise.all([ userPromise, postsPromise, commentsPromise ])
    .then((res) => {
        console.log(res)
    })


/*
    Use cases of Promise.all()

    1. Loading multiple APIs
    2. Downloading multiple files
    3. Fetching dashboard data comprising of multiple API calls
*/