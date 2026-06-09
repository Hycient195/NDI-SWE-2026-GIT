/*
    fetch(api-endpoint-to-external-resource)

    HTTP Verbs
    
    GET -> Used to obtain resource(s)
    POST -> Used to create resource(s)
    DELETE -> Used to remove | delete resource
    PUT -> Used to replace an entire resource
    PATCH -> Used to replace a part of a resource
*/

/* Fetch Using .then() and .catch */

function getPostsPromise() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
}



/* Fetch Using async and await in a try..catch block */

async function getAllPosts() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await res.json();

        console.log(data);    
    } catch(error) {
        console.log(error)
    }
}


async function getSinglePost(postId){
    try {
        /* API with a path parameter: postId is the path parameter */
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
// getSinglePost(10)


async function getSinglePostComments(postId){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)

        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
// getSinglePostComments(3)



async function getCommentsOnSinglePost(postId){
    try {
        /* API with query parameter: ?postId is the query parameter */
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)

        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getCommentsOnSinglePost(4)