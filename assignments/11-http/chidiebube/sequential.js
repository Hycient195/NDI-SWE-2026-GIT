/**
 * Write another function that makes 3 sequential GET requests to jsonplaceholder
 */

async function seqRequests() {
  try {
    // Get Users by Id, wait for user request to finish
    const users = await fetch(
      "https://jsonplaceholder.typicode.com/users?id=4",
    );
    // convert response to JSON and log the result
    console.log(await users.json());


    // Get Posts by Id, wait for post request to finish
    const posts = await fetch(
      "https://jsonplaceholder.typicode.com/posts?id=5",
    );
    // convert response to JSON and log the result
    console.log(await posts.json());


    // Get Albums by Id
    const albums = await fetch(
      "https://jsonplaceholder.typicode.com/albums?id=2",
    );
    // convert response to JSON and log the result
    console.log(await albums.json());

    
  } catch (err) {
    // else handle any error that might occur
    console.log(err);
  }
}

seqRequests(); // This request runs one after another
