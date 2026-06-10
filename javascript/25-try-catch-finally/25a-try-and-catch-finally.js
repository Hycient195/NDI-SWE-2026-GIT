/*
    The try-catch statement is a statement used to handle runtime errors,
    so that an application doesn't crash completely when an error is
    encoutered os something does wrong.

    // Syntax

    try {
        // code that might throw an error
    } catch (error) {
        // code that handles a likely error scenario
    } finally {
        executed notwithstanding, after a sucess or failure of the code in the try block
    }
*/


try {
    console.log("Before Error")
    console.log(user); // error operation trying to access a variable that does not exist
    console.log("After Error")
} catch (error) {
    // Catch block catches the error, and prevents our program from crashing
    console.log("Error encountered");
    console.log(error.message)
    console.log(error.name)
} finally {
    console.log("I run regardless!");
}

console.log("Our program is still running")