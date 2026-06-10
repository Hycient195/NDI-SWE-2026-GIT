/*
    Inheritance allows one or more classes to reuse another class's
    functionaliies/methods and properties/data
*/

class Animal {
    eat() {
        console.log("Eating...")
    }

    walk() {
        console.log("Walking...")
    }
}

/*
    Class Dog inherits from class Animal, and as a result of that,
    has access to methods and properties from its parent class, Animal
*/
class Dog extends Animal {
    bark() {
        console.log("Woof woof...");
    }
}

class Cat extends Animal {
    meow() {
        console.log("Meow meow...")
    }
}

const dog1 = new Dog()

dog1.walk()
dog1.bark();





/* Parent Class */
class User {
    login() {
        console.log("Signing in")
    }
}

/* Child class that inherits from the parent class */
class PremiumUser extends User {
    applyDiscountOnCheckout() {
        console.log("Discount applied to premium User")
    }
}