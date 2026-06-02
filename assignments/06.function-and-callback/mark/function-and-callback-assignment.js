function calc(tempInput, callback){
    const result = ((tempInput * 1.8)+32);
    callback(tempInput, result);
}
function tempConversion(tempInput, result){
    console.log(tempInput, "in Celsius is", result, "in Farenheit");   

}
calc(65, tempConversion );


