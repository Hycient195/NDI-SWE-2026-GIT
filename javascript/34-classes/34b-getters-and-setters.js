/*
    A getter allows read access to a propery while preveting write access
*/

class Rectangle {
    // Fields
    width = 0;
    height = 0

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height
    }
    // It's good to note that getters are acessed like properties, and not methods
}

const rect1 = new Rectangle(2, 4)

// rect1.area = 20; // Forbidden exteral access to internal resoource

const area = rect1.area;

console.log(area)



/*
    Setters allow the write to an internal property of a class, whist preventing read
    access to that property
*/

class User {
    name = ""
    email = ""
    _password = "" // internal backing field

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // get password() {
    //     return this._password
    // }

    set password(pwd) { // Password setter modifier allows user to write to the password field, but not read from it
        this._password = pwd
    }
}

const john = new User("John", "john123@email.com")

john.password = "Pass1234"

console.log(john.password)






class Student {
    name = "";
    _age = 0; // internal backing field for age

    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    set age(value) {
        if (value < 0) throw new Error("Age cannot be negative")
        this._age = value
    }

    get age() {
        return this._age;
    }
}

const bukola = new Student("Bukola", 19);

bukola.age = 4;

console.log(bukola)