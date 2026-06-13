const container = document.querySelector(".container");

/*

    container.children[0] // accessing children element as a HTML Collection array from the parent

    container.parentElement // Accessing a parent from its chile element
*/

container.children[0].style.color = "red"



console.log(container.children) // children
console.log(container.parentElement) // parent
console.log(container.firstElementChild) // first child
console.log(container.lastElementChild) // last child
console.log(container.previousElementSibling) // last sibling
console.log(container.nextElementSibling) // Next sibling


