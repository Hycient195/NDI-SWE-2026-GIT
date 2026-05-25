/* Object Literal Lookup */

/*
This is an alternative to to the if-else or switch statement,
by making use of a javascript object, by using the properties
of the object as switch cases for matching the value used to index
the object.
*/

const userType = "staff";

const userMessage = {
    admin: "Welcome admin",
    student: "Welcome student",
    staff: "Welcome staff"
}


const greetUser = userMessage[userType]

console.log(greetUser)


// userMessage.staff;
// userMessage["staff"]
