// const celsiusDeg = 32;
// function multiply(a, b){
//     return a * b;
// }

// function add(a, b){
//     return a + b;
// }


// const multiplicationResult = multiply(celsiusDeg, 1.8);
// const additionResult = add(multiplicationResult,32);
// console.log(celsiusDeg, "in Celsius is", additionResult, "in Farenheit");

const celsiusDeg = 68;
function multiply(a, b){
    return a * b;
}

function add(a, b){
    return a + b;
}

function tempConversion(celsius, multiplier, callback) {
    const multiplicationResult = multiply(celsius, multiplier);
    const additionResult = add(multiplicationResult, 32);
    callback(additionResult);
}

tempConversion(celsiusDeg, 1.8, function(fahrenheit) {
    console.log(celsiusDeg, "in Celsius is", fahrenheit, "in Fahrenheit");
});
