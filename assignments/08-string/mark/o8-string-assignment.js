// QUESTION ONE
const maskEmail = function theMask (email){
    const visible = email.slice(0, 4);
    const visible2 = email.slice(-10)
    const asterixLength = (email.length -14);
    return visible + "*".repeat(asterixLength) + visible2
}

console.log(maskEmail("miesinteiosaisai@gmail.com"));



// QUESTION TWO

function WebLink(input){
    return `https://${input}.com`;
}
console.log(WebLink("amazon"));
    

//QUESTION THREE

function verifyMail(emailInput){
    return emailInput.includes("@", ".com"); 
}
console.log(verifyMail("abelmonday@gmail.com"))


            