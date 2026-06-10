const box = document.querySelector(".box");
const changeButton = document.querySelector("#change");


console.log(box.classList.value) // returns all class names of an element


box.classList.add("new-class") // adds a new class name to an element
console.log(box.classList.value)


box.classList.remove("new-class") // removes a class name from an element
console.log(box.classList.value)


box.classList.replace("box", "Something-new") // replaces an existing class on an element with another class
console.log(box.classList.value)


console.log(box.classList.contains("Something-new")) // returns a boolean corresponding if a class exists on an element


changeButton.addEventListener("click", () => {
    box.classList.toggle("blue-text") // used to turn on and off a class on an element
})

console.log(box.classList.value)
