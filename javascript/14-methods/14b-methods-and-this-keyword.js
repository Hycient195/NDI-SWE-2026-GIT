/*

    The "this" keyword is the reference to an entity, whist inside of
    that entity.

*/

const user = {
    firstName: "Alice",
    lastName: "Charles",
    age: 28,
    printUser() {
        console.log("Full name is " + this.firstName + " " + this.lastName + " " + "and age is " + this.age)
    }
}

user.printUser();
