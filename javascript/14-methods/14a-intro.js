/*

    A method is simply a function that is attached to an object.

    it is a function assigned to the property of an object,
    and is executed by calling it by the property it is assigned
    to in the object.

*/

const user = {
    name: "John Smith",
    age: 45,
    // syntax 1 : Method syntax
    greetUser() {
        console.log("Welcome User")
    },
    // Syntax 2 : Anonymous function
    saluteUser: function() {
        console.log("Salutations User!")
    },
    // Syntax : anonymous arrow function
    hailUser: () => {
        console.log("Hail User")
    }
}

user.greetUser();
user.saluteUser()
user.hailUser();