/* Switch statement syntax */

/*
Switch statement is used for strict equality comparision

switch (boolean or boolean expression) {
    case value1:
        // code that should be executed if value1 is true
        break;
    case value2:
        // code to be should be executed if value2 is true
        break;
    case value3;
        // code to be should be executed if value2 is true
        break;
    default:
        // 
        Code to run if all cases above are false (if no matching cases above)
}

*/


const user = "admin";

/*
    if User is admin, we welcome admin.
    If user is student, we welcome student
    if user is staff, we welcome staff
    if user is none of the above, we welcome as guest
*/

switch(user) {
    case "admin":
        console.log("Welcome admin");
        break;
    case "student":
        console.log("Welcome student");
        break;
    case "staff":
        console.log("Welcome staff");
        break;
    default:
        console.log("Welcome guest");
}



const score = 43;

switch (true) {
    case (score >= 70):
        console.log("Excellent");
        break;
    case (score >= 60):
        console.log("Very Good");
        break;
    case (score >= 50):
        console.log("Good");
        break;
    case (score >= 45):
        console.log("Pass");
        break;
    case (score >= 40):
        console.log("Fair");
        break;
    default:
        console.log("Fail")
}


// Excellent -> 70 and above
// Very Good -> 60 to 70
// Good -> 50 to 60
// Pass -> 45 to 50
// Fair -> 40 to 45
// Fail -> 40 and below




/* ========== Switch Statement Fallthrough ========= */
/*
    This is used to execute one block of code, for multiple
    switch cases
*/
const status = "good"

/*
    If our status is either "good", "manageable" or
    "fair", we want to allow access.
*/

switch (status) {
    case "good":
    case "manageable":
    case "fair":
        console.log("Access allowed");
        break;
    default:
        console.log("Access denied")
}