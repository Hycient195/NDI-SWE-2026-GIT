/* ==== Destructuring nested array and object content ===== */
const items = {
    title: "User Cart",
    content: ["Mushroom", "Toadstool", "Cabbage"],
    location: { address: "123 Chi drive", postalCode: 600001 }
}

const {
    content: [, secondItem ],
    location: { postalCode }
} = items

console.log(secondItem)
console.log(postalCode)


/* ==== Function Parameter Destructuring ===== */
const greetUser = ({ name, role }) => {
    return `Hello ${name} the ${role}`
}

console.log(greetUser({ role: "Designer",  name: "James" }))