/*
    The DOM stands for Document Object Model

    It is an otherface that represents an HTML document as a tree of
    objects that javascript, can interract with.
*/

console.log("Welcome to JavaScript in the Browser");

/* =============================================== */
/* ====== Targetting An Element on the DOM ======= */
/* =============================================== */

/* the document.querySelector() selects the first occourence of its target from the DOM */

const titleElement = document.querySelector("h1") // Targetting an element based on tag name
const secondTitle = document.querySelector("#second-title") // Targetting an element based on id name
const thirdTitle = document.querySelector(".third-title") // Targetting an element based on class name

console.log(titleElement)
console.log(secondTitle)
console.log(thirdTitle)

console.log(titleElement.textContent) // Displaying the text content of an element

titleElement.textContent = "This is our new title" // Ovewriting the text content of HTML using JavaScript



/* ====================================================== */
/* ====== Targetting Multiple Elements on the DOM ======= */
/* ====================================================== */

/*
    document.querySelectAll() also works like the document.querySelector(),
    targetting elements by either tag name, id or class name
*/
const allh1 = document.querySelectorAll("h1") // selecting all h1 elements on the DOM

allh1.forEach((element, index) => {
    element.textContent = `${element.textContent.split("").reverse().join("")}`
})

console.log(allh1)


/* ====================================================== */
/* ====== Other Methods used for targetting DOM elements ======= */
/* ====================================================== */
document.getElementById() // gets an element by id name
document.getElementsByClassName() // gets an elements by class name
document.getElementsByTagName() // gets an elements by class name
