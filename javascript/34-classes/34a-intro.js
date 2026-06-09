
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
    Class Properties are a mechanism or variable used to store information about
    the object to be created from the instance of a Class
*/

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    name;
    age;
}

const user1 = new User("Michael", 34)
const user2 = new User("James", 5)
const user3 = new User("Salome", 52)
const user4 = new User("Tony", 22)

console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)