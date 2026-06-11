function convertToFarenheit (celcuis, callback){
    const farenheit =(celcuis * 9) / 5 + 32;
    callback(celcuis, farenheit);
};
  /* arrow callback function */
convertToFarenheit ( 27, (celcuis, farenheit) =>{
    console.log(celcuis + "in celcuis is" + farenheit + "in farenheit");
});
 /* named callback function */
function TemperatureResult(celcuis, farenheit){ 
    console.log(celcuis + "in celsuis is" + farenheit +"in farenheit");
}
convertToFarenheit(27, TemperatureResult);