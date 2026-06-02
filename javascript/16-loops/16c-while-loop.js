/*
    While loop Syntax

    while (truthy condition) {
        // code to be executed
    }
*/



let ramdomNumber = 0;

while (ramdomNumber !== 5) {
    ramdomNumber = Math.floor(Math.random() * 10); // Gives a random number between 0 and 9

    console.log(ramdomNumber)

    // The program exits the loop once the number "5" is generated.
}