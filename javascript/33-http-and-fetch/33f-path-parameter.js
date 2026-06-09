/*
    A path API endpoint parameter is a dynamic segment of a URL used to specify a
    specific unique resource, it can accept a variety of values in its place
    
    The segment "/:postId" is a path parameter and can accept different values,
    in this case signifying the different posts to fetch


    Syntax: https://jsonplaceholder.typicode.com/posts/:postId
    
    Example: https://jsonplaceholder.typicode.com/posts/2
*/

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