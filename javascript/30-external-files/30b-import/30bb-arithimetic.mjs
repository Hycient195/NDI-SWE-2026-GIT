import { pi, multiply, add, modulus } from "./30ba-functions.mjs"

function areaOfCircle(r) {
    return multiply(pi, multiply(r, r))
}

function circumferenceOfCircle(r) {
    return multiply(2, multiply(pi, r))
}

function perimeterOfRectangle(l, b) {
    return add(multiply(2, l), multiply(2, b))
}

console.log(areaOfCircle(4))
console.log(circumferenceOfCircle(5))
console.log(perimeterOfRectangle(4, 6))

console.log(modulus(16, 5))