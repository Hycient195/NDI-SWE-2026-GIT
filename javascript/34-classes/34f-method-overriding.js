/*
    Method overriding is the replacement of a parent method, within a child class

    When a method defined in a child class has the same name, as a method
    defined in its parent, the method in the child class takes precedence
    and overrides the method implementation in the parent.
*/

class Animal {
    speak() {
        console.log("Animal sound!")
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof woof!")
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meow meow!")
    }
}


const dog = new Dog();
const cat = new Cat();
const animal = new Animal();

dog.speak()
cat.speak();
animal.speak();
