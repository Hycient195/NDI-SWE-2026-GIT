// QUESTION ONE
const maskEmail = function theMask(email) {
  const splitEmail = email.split("@");
  const visible = splitEmail[0].slice(0, 4);
  const asterixLength = splitEmail[0].length - 4;

  return visible + "*".repeat(asterixLength) + "@" + splitEmail[1];
};
console.log(maskEmail("amadi@gmail.com"));



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


            