
const counter = document.querySelector(".counter")

let count = localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0 ;

counter.innerHTML = count;

const handleIncrease = () => {
    localStorage.setItem("count", count)
    counter.textContent = count++
}

const handleDecrease = () => {
    localStorage.setItem("count", count)
    counter.textContent = count--
}

/* Look Up the Rest */

// localStorage.length
// localStorage.clear()
// localStorage.removeItem()