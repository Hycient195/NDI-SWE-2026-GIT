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

/* Sequential Execution */
/* 
    Sequential Execution. Each item, wait for the one before it before executing, irrespective
    of how long the later promises take to resolve
*/

const user = await userPromise
console.log(user)

const posts = await postsPromise
console.log(posts)

const comments = await commentsPromise
console.log(comments)