async function getParallelData() {
    try {
        const results = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts/1"),
            fetch("https://jsonplaceholder.typicode.com/posts/2"),
            fetch("https://jsonplaceholder.typicode.com/posts/3")
        ]);

        const data = await Promise.all(
            results.map(response => response.json())
        );

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getParallelData();