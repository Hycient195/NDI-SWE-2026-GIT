/*
    A query parameter looks something like the below

    /comments?postId=3

    The part after the question mark is called the query parameter
*/

/** Query Parameters with bare sting */
const getSinglePost = async (postId, commentId) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}&commentId=${commentId}`)

        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const getSinglePostClean = async (postId, commentId) => {
    try {

        /* Constructing a query string from an object, using the new URLSearchParams */
        const params = new URLSearchParams({
            postId: postId,
            commentId: commentId
        })

        console.log(params.toString())

        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?${params}`)

        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getSinglePostClean(3, 11)