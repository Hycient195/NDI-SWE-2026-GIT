/* PUT Request */

const replacePost = async (postId, propertyObject) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            method: "PUT",
            body: JSON.stringify(propertyObject)
        })

        const data = await response.json();

        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

replacePost(
    20,
    {
        title: "Replaced Post",
        body: "Replaced content",
        otherProperty: "Another property"
    }
)