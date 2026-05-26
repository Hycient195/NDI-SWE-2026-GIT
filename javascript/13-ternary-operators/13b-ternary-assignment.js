const score = 40;

/*
    Ternary assignment is used to conditionally assign a value to a variable,
    based on a prescribed condition.
*/

// Score less then 50 is fail, and score more than 50 is pass

const statusMessage = (score < 50) ? "Subject failed" : "Subject passed";

console.log(statusMessage);


/* =================================================================== */
/*
    Write a program using ternary operator that prints the message
    "Hot Weather" if temperature is above 30, and "Cold Weather" 
    if temperature is below 30
*/

const temperature = 25;

const weatherMessage = (temperature > 30) ? "Hot weather" : "Cold weather";

console.log(weatherMessage);