/* DELETE Request */

const deletePost = async (postId) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "DELETE",
        })

        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

deletePost(20)