const isActive = true;

// input -> condition -> output

/* if statement syntax

if ( condition ) {
    code to be executed, if condition is true
}
*/

/*

An if statement executes the code in it, if the condition specified in its parenthesis is true;

*/

if (isActive === true) {
    console.log("This is an active member");
}

if (isActive) {
    console.log("This has same effect as the above");
}



const isOnline = false;

if (isOnline === false) {
    console.log("This user is not online");
}

if (!isOnline) {
    console.log("This also means user is not online");
}