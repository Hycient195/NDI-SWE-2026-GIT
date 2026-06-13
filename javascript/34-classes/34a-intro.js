
/*
    A class is a template or blueprint for creating an object

    Because an object created from a class, is called an "instance" of that class


    Basic syntax of a Class

    class User {

    }
*/

/* Class Constuctor */
/*
    A class constructor is a special method that runs automatically when a new object is
    created from a class

    // Syntax of a class constructor

    class User {
        constructor(name, age) {
            // Runs before every other method or functionality in the class
        }
    }
*/



/* 
    Class fields are a mechanism or variable used to store information about
    the object to be created from the instance of a Class
*/

class User {
    // Class Fields
    name = "";
    age = "";

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // Class Method
    greet() {
        console.log(`Welcome ${this.name}`)
    }
}

const user1 = new User("Michael", 34) // Instantiation of a Class (ie: creating an object from a class)
const user2 = new User("James", 5)
const user3 = new User("Salome", 52)
const user4 = new User("Tony", 22)

console.log(user1)
console.log(user2.name)
console.log(user3.greet())
console.log(user4.greet())


/* Default Values */
class Employee {
    name = "";

    constructor(name = "Staff") { // providing defutl values through the constructor
        this.name = name
    }
}

const employee1 = new Employee("Simon")

console.log(employee1)



/* A Class Expression: An anonymous class, assigned to a named variable */
const AnimalType = class {
    name = ""

    speak() {
        console.log("Make sound")
    }
}

const dog = new AnimalType()

dog.speak()