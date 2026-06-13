/*
    The super() keyword makes a call to the parent class constructor, within the child class's constructor,
    to pass all values required, by the parent class, which enables the child class to work as supposed.
*/

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name) // This is a reference to the parent constructor, within the child class
        this.breed = breed;
    }
}


const dog1 = new Dog("Jim", "German Shepherd");

console.log(dog1)