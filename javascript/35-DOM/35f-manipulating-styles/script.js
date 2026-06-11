const box = document.querySelector(".box");
const box2 = document.querySelector(".box2");


/* Manipulating styles by writing directly to the style object */
box.style.backgroundColor = "orange"
box.style.padding = "20px"
box.style.color = "red"


/* Manipulating styles by appending a style class to an element */
box2.classList.add("blue-box")