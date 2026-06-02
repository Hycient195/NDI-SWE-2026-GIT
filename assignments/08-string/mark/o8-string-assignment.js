// QUESTION ONE
const maskEmail = function theMask (email){
    const visible = email.slice(0, 4);
    const visible2 =  email.slice(-10);
    const asterixLength = (email.length - 15);
    return visible + "*".repeat(asterixLength) + visible2;
}

console.log(maskEmail("Abujatravels@gmail.com"));



// QUESTION TWO

function WebLink(input){
    return `https://${input}.com`;
}
console.log(WebLink("amazon"));
    


            