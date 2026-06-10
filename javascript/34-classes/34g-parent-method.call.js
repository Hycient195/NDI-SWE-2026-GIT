class Animal {
    speak() {
        console.log("Animal sound!")
    }
}

class Dog extends Animal {
    speak() {
        super.speak(); // This is how you call a parent members within a child class, using the "super" keyword
        console.log("Woof woof!")
    }
}

const dog = new Dog();

dog.speak()