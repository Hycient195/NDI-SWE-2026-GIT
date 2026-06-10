const anchor = document.querySelector("#anchor");

console.log(anchor.getAttribute("href")) 


anchor.setAttribute("href", "https://github.com")

console.log(anchor.getAttribute("href")) 


anchor.removeAttribute("href")

console.log(anchor.getAttribute("href")) 
