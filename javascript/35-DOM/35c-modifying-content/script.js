const text1 = document.querySelector(".target-1");
const text2 = document.querySelector(".target-2");
const text3 = document.querySelector(".target-3");

// This returns only the text in the element, and nothing else,
// and as such the text can be mutated into the DOM
text1.textContent = "New content 1"


// This returns both text and stringified HTML, and as such
// can also write same to the element
text2.innerHTML = "<h1 style=\"color: red;\" >Large Element</>"

/*
    Avoid using .innerHTML as it can allow the injection and execution
    of malicious javascript from third party sources
*/
// text2.innerHTML = `<img src="y" onerror="alert("Injected")">`


// This returns both text and stringified HTML, and as such
// can also write same to the element
text3.innerText = "Another content"



// Research deeply on more difference between the three
// approaches above