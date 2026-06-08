/* Dynamic Rounding */
console.log("Math.round()", Math.round(4.3))
console.log("Math.round()", Math.round(4.5))
console.log("Math.round()", Math.round(4.9))


/* Rounding Up */
console.log("Math.ceil()", Math.ceil(5.0))
console.log("Math.ceil()", Math.ceil(5.1))
console.log("Math.ceil()", Math.ceil(5.9))


/* Rounding Down */
console.log("Math.floor()", Math.floor(5.5))
console.log("Math.floor()", Math.floor(5.6))
console.log("Math.floor()", Math.floor(5.9))


/* Truncating */
console.log("Truncating", Math.trunc(6.999))


/* Min and Max */
const max = Math.max(2,6,3,7,7,1)
console.log("Max", max)

const min = Math.min(2,6,3,7,7,1)
console.log("Min", min)


/* Powers and Squares */
const power = Math.pow(2, 4)
console.log("2 ** 4", power)

const root = Math.sqrt(81)
console.log("Square root of 81 ", root);

const cubeRoot = Math.cbrt(8)
console.log("Cube root of 8 ", cubeRoot);
