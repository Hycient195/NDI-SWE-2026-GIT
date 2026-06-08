Key points to note When using async-await

1. Don't use the "await" keyword in a function not markes with "async"
2. Always remeber to await you promises with "await" else, an uncompleted or pending
    promise is returned instead of the final completed resolved | rejected value
3. Remeber to always use the await operations within a try catch block