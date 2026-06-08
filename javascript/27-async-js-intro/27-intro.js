const greet = (name, callback) => {
    console.log(`Welcome ${name}`)
    console.log(`Have a seat ${name}`)
    console.log(`What would you like to have ${name}`)
    setTimeout(() => {
        console.log("Sit after 2 seconds")
    }, 2000);
    callback(); // Execute an external functionality after an internal functionality has executed
}

greet("Salome", () => {
    console.log("This is executed after greeting user");
});



/* ========== Callback Hell =========== */

getUser((user) => {
    getPosts(user.id, (posts) => {
        getComment(post[0].id, (comments) => {
            getLikes(comments[0].id, (likes) => {
                console.log(likes)
            })
        })
    })
})


/** Modern asynchronous Javascript comes to solve the callback hell issue */