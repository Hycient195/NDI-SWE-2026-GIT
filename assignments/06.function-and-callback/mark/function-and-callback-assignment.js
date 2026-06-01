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

const celsiusDeg = 56;
function calc(celsiusDeg, callback){
    const result = ((celsiusDeg * 1.8)+32);
    callback(result);
}
function tempConversion(result){
    console.log(celsiusDeg, "in Celsius is", result, "in Farenheit");

// const tempConverter = function(result){
//     console.log(celsiusDeg, "in Celsius is", result, "in Farenheit");

// const tempConverter = (result)=>{
//     console.log(celsiusDeg, "in Celsius is", result, "in Farenheit");    

}
calc(celsiusDeg, tempConversion )


