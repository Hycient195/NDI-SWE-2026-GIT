/* ======================================================== */
/* ============ Creating Elements in the DOM ============ */
/* ======================================================== */
const heading = document.createElement("h2");
heading.textContent = "This is dynamic heading"

const heading1 = document.createElement("h1");
heading1.textContent = "This is another heading"


const parent = document.querySelector(".parent");




/* ======================================================== */
/* ============ Appending Elements in the DOM ============ */
/* ======================================================== */

// used to append a created element to a parent
parent.appendChild(heading) 

// Modern and more preferred implementation to append a created element, or even string to a parent
parent.append(heading, "iooi", heading1) // support adding multiple elements at once

// Adds the new element or content before the original elements in the parent
parent.prepend(heading1)


/*
    .insertBefore() allows the inserting of a new element before an
    existing element within a known parent element.
*/

const fruitList = document.querySelector(".fruit-list")
const orange = document.querySelector(".orange")

const banana = document.createElement("li")
banana.textContent = "Banana"

fruitList.insertBefore(banana, orange)



/* ======================================================== */
/* ============ Removing Elements from the DOM ============ */
/* ======================================================== */
const removeElement = document.querySelector(".remove");

removeElement.remove();





/* ======================================================== */
/* ============ Replacing Elements from the DOM ============ */
/* ======================================================== */
const oldElement = document.querySelector(".replace");

const newElement = document.createElement("h1")
newElement.textContent = "This is new replacement";

oldElement.replaceWith(newElement);
