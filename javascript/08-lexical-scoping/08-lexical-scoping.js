/*
    Lexical scope is the range of accessibility of variables determninded by their plysical location in our source code
*/

let familyName = "Smith"; /** Global Variable */


/* The below is referred to as a scope, or a block */
{
    let age = 20;
    console.log(age)
    console.log(familyName)

    {
        let childName = "Janice";
        console.log(childName);
        console.log(age);
    }
}

// console.log(childName)
// console.log(age) /* Not accesssible outside of the scope block */


var name = "James";

name = "Angelo"

console.log(name)

{
    var hiddenName = "Hidden James";
    console.log(hiddenName);
}

console.log(hiddenName)
