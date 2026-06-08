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

/* Paralell Execution */
/*
    All items execute in paralell and has its data when it finishes its own resolution
*/
const [ user, posts, comments ] = await Promise.all([ userPromise, postsPromise, commentsPromise ])

