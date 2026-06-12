/*
    An event is an action on the DOM, which different elements and
    components on our page can react to

    Some popular events on the DOM includes

    "click", "hover", "submit", "input", "keypress" "focus",
*/

/* ========================================= */
/* ============ Event Listeners ============ */
/* ========================================= */

const button = document.querySelector(".alert-btn");


function alertUser() {
    alert("Button Clicked");
}

button.addEventListener("click", alertUser)



/* ========================================= */
/* ============ Change Title Text ============ */
/* ========================================= */
const changeButton = document.querySelector(".change-text");
const titleText = document.querySelector(".title");

changeButton.addEventListener("click", () => {
    titleText.textContent = "Hello World!"
})




/* ============================================ */
/* ============ The "event" object ============ */
/* ============================================ */
const eventObj = document.querySelector(".event-obj");

/*
    the event listener accepts a callback argument that has reference to the entire event
    executed.
    A property of interest is the "target" property, which as reference to the 
    element that executed the event, and from it, all other properties about the element, can
    be extracted
*/
eventObj.addEventListener("click", (event) => { console.log(event.target) })



/* =========================================== */
/* ============ Event Propagation ============ */
/* =========================================== */
/*
    This simply refers to the execution direction of events on the DOM

    When a user interracts with an element with an event on a web page,
    (eg clicking on a button), the browser passes the event through 3 distinct phases

    1. Capturing Phase: This starts from the very top of the DOM tree (ie document),
        and trickles down to the element that executed the event

    2. Target phase: This is when the event reacthes the elemennt that
        called the event action.
        
    3. Bubbling Phase. This after the execution, when the event reverses
        and bubbles upwards from the target element to the root of the DOM,
        passing through all of its parent elements along the way
*/


const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");

outer.addEventListener("click", event => {
    console.log("Clicked outer")
})

inner.addEventListener("click", event => {
    event.stopPropagation() // This method is called on an event to stop its propgation
    console.log("Clicked inner")
})




/* ========================================== */
/* ============ Event Delegation ============ */
/* ========================================== */
const numberList = document.querySelector(".number-list");

/*
    Instead of attaching listeners to the many children elements, we attach it to the parent,
    and use it to listen to event on the children
*/
numberList.addEventListener("click", event => {
    if (event.target.tagName === "LI") {
        alert(event.target.textContent)
    }
})


/* ==================================================== */
/* ============ Listening for Input Events ============ */
/* ==================================================== */

const inputText = document.querySelector(".input-text");

inputText.addEventListener("input", e => {
    console.log(e.target.value)
})



/* ======================================================= */
/* ============ Listening for Form Submission ============ */
/* ======================================================= */
const simpleForm = document.querySelector(".simple-form");
const title = document.querySelector(".title");
const body = document.querySelector(".body");


/* Simple submit event */
simpleForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    console.log(title.value) // capturing input field value in submit event
})

/* Making a Post Request to Submit for fields */
simpleForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({ userId: 2, title: title.value.trim(), body: body.value.trim() })
        })

        const data = await response.json();

        alert(JSON.stringify(data));

    } catch (error) {
        alert("Error sending post")
    }

    console.log(simpleText.value)
})


/* =================================================== */
/* ============ Rendering a List of items ============ */
/* =================================================== */
const dynamicList = document.querySelector(".dynamic-render");

const fruits = ["Reading", "Swimming", "Skiing", "Wakeboarding", "Cycling", "Running"];

fruits.forEach(fruit => {
    const fruitItem = document.createElement("li");

    fruitItem.textContent = fruit;

    dynamicList.append(fruitItem)
})



/* ===================================== */
/* ============ Simple Todo ============ */
/* ===================================== */
const todoInput = document.querySelector(".todo-input");
const addItemButton = document.querySelector(".todo-add-item");
const todoItems = document.querySelector(".todo-items");

addItemButton.addEventListener("click", () => {

    const newItem = document.createElement("li")

    newItem.innerHTML = `
    <strong>${todoInput.value}</strong>
    `

    todoItems.append(newItem)

    todoInput.value = ""
})



/* =========================================== */
/* ============ Intermediate Todo ============ */
/* =========================================== */
const intermediateTodoInput = document.querySelector(".intermediate-todo-input");
const intermediateAddItemButton = document.querySelector(".intermediate-todo-add-item");
const intermediateTodoItems = document.querySelector(".intermediate-todo-items");

const items = [];

intermediateAddItemButton.addEventListener("click", () => {

    // Adding text obtained from input, into the items array
    items.push(intermediateTodoInput.value);

    // Clearing out input element in preparation for the next input
    intermediateTodoInput.value = "";

    // Taking the items in the array and updating the DOM
    renderItems()
})

function renderItems() {
    // Clearing ur ul element to receive a fresh set of li children element
    intermediateTodoItems.innerHTML = "";

    // Looping thruogh all items in the array
    items.forEach((item, index) => {

        // Creating an element, each for every item in the array
        const itemElement = document.createElement("li");

        // Injecting HTML element content into the newly created element created above
        // And assigning a delete function to the delete button of each displayed item
        itemElement.innerHTML = `
        <strong>${item}</strong>
        <button onclick="deleteItem(${index})">Delete</button>
        `

        // Appending each of the created "li" elements to the "ul" parent
        intermediateTodoItems.append(itemElement)
    })
}

function deleteItem(index) {
    // Using the splice method to remove the item with index provided, from the items array
    items.splice(index, 1)

    // Taking the items in the array and updating the DOM
    renderItems()
}



/* ===================================================== */
/* ============ Rendering API Response Data ============ */
/* ===================================================== */
const fetchButton = document.querySelector(".fetch-users");
const userList = document.querySelector(".users");

fetchButton.addEventListener("click", async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        data.forEach((item) => {
            const element = document.createElement("div");

            element.innerHTML = `
            <div><div>${item?.name?.[0]}</div></div>
            <div>
                <div>${item?.name}</div>
                <div>${item?.email}</div>
            </div>
            `
            userList.append(element)
        })

        console.log(data)
    } catch (error) {
        alert(`Error fetching users ${error.message}`)
    }
})


/* =============================================== */
/* ============ Using Event Attribute ============ */
/* =============================================== */
const counter = document.querySelector(".counter");

let counterValue = 0;

const handleIncrease = () => {
    counter.textContent = counterValue++
}

const handleDecrease = () => {
    counter.textContent = counterValue--
}