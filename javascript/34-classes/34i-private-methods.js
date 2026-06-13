/*
    These are used to mark methods as private.

    Private methods within a class are popularly known as helper or utility methods.
    They are used for operations like comparison, formatting, verification, etc within
    publicly acessible methods owned by the class
*/

class User {
    #validatePassword(password) {
        return password.length > 8;
    }

    createPassword(password) {
        if(this.#validatePassword(password)) {
            console.log("Password accepted")
        } else {
            console.log("Password is too short")
        }
    }
}

const user = new User()

user.createPassword("Pass1")