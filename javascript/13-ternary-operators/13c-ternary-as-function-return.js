/*

    // Problem statement

    Write a function that returns the text "green" if a boolean varable "isActive"
    is true, or "gray" if the boolean variable is false

*/

const isActive = false;


function checkIsActive(status) {
    let statusColor = "";

    if (status) {
        statusColor = "green"
    } else {
        statusColor = "gray"
    }

    return statusColor;
}

console.log(checkIsActive(isActive))



/* Implementing the above using ternary as function return */
const checkIsActive2 = status => status ? "green" : "gray";


console.log(checkIsActive2(isActive))