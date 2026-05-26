// Function to convert Celcuis to Fahrenheit using a callback function

function celToFah(celcuis, callback) {
    // multiply cel by 9/5 and Add 32
    const fah = (celcuis * (9/5) + 32);

    // passing the result to the callback function 
    callback(celcuis, fah);

}

// callback function
function result(celcuis, fah) {
    console.log(`${celcuis} in Celcuis is ${fah} Fahrenheit.`);
}

celToFah(27, result);