/*
    Staic methods and properties are methods and properties that are acessible
    directly from a class, rather than the instance of a class.

    They are mostly used as utility or helper functions, and sometime configuration definition.
*/

Math.random() // Static class method
Math.PI // Static class Property

const map = new Map() // Instance must be created first, before accesing properties and methods.
map.clear() // Instance class method
map.size // Instance class property


class MathHelper {
    static square(number) {
        return number * number;
    }

    static specialConstant = 27385.2345
}

const result = MathHelper.square(4)
const constant = MathHelper.specialConstant

console.log(result)
console.log(constant)