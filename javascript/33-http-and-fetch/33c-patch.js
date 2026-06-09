/* PATCH Request */

const updateUserProperty = (postId, userObj) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            method: "PATCH",
            body: JSON.stringify(userObj)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(e => {
            console.log(e)
        })
}

updateUserProperty(
    20,
    {
        title: "This is a new post title"
    }
)