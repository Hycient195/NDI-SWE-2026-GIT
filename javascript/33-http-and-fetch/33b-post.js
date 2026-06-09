/* POST Request: Used to create a new resource */

async function addUser() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: 11,
                title: "This is our new post",
                body: "This is the post content"
            })
        })

        const data = await res.json()

        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}

addUser();