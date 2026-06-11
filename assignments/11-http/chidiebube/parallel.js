/**
 * Write a function, one that makes 3 parallel GET requests to json placeholder
 */

// First created an async function 
async function getParallelData() {
    try {
        // Get 3 Parallel requests, start all 3 requests at the same time using Promise.all()
        const res = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users?id=2"),
            fetch("https://jsonplaceholder.typicode.com/posts?id=3"),
            fetch("https://jsonplaceholder.typicode.com/comments?id=1")
        ]);

        // then convert each response to a javascript object using res.json()
        const data = await Promise.all(
            res.map(res => res.json())
        );
        console.log(data);
    } catch(err) {
        console.log(err)
    }
}
getParallelData(); // This requests start together