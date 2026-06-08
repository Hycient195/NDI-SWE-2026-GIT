Promise.resolve()
    .then(() => {
        // for some reason we want to exit the success path, and throw an error, terminating
        // the success into a rejected | failed promise

        throw new Error("Oops! something went wrong");
    })
    .catch((err) => {
        console.log(err)
    })

/*
    It's good to note that the catch block can catch failures from multiple chained
    previous .then() blocks.
*/