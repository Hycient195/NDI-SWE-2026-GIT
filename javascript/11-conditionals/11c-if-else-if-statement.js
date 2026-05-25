const score = 65;

/*
This is used for evaluating situations where there are more than one conditions based on the boolean property or boolean evaluation
*/

if (score >= 70) {
    console.log("Excellent!");
} else if (score >= 60) {
    console.log("Very Good")
} else if (score >= 50) {
    console.log("Good")
} else if (score >= 45) {
    console.log("Pass")
} else if (score >= 40) {
    console.log("Fair")
} else {
    console.log("Fail")
}


// Excellent -> 70 and above
// Very Good -> 60 to 70
// Good -> 50 to 60
// Pass -> 45 to 50
// Fair -> 40 to 45
// Fail -> 40 and below