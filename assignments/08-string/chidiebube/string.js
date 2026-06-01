/**
 * ## Question 1
Write a mask function that takes in an email, replace all the character
after the 4th charcter till it gets to the "@" with and asterix, 
and return the email domain as it is. This function must work with all email types and shpes
Example jamessmith@gmail.com -> jame******@gmail.com
 */

// Function to mask the email
function maskEmail(email) {
    // Split the email into username and domain parts
    const [username, domainName] = email.split('@');
    // Mask the username by keeping the first 4 characters and replacing the rest with asterisks
    const maskedUsername = username.slice(0, 4) + '*'.repeat(username.length - 4);
    // Return the masked email using template literals
    return `${maskedUsername}@${domainName}`;
}

// Check the function
console.log(maskEmail('jamessmith@gmail.com')); 
console.log(maskEmail('chidiebube@yahoo.com')); 



/**
 * ## Question 2
Write a function that takes in a string and forms it into a url using template literal
Example: "google" -> "https://google.com"
 */

// Function to convert a string into a URL
function inputUrl(domain) {
    // Return the URL using template literals
    return `https://${domain}.com`;
}

// Check the function
console.log(inputUrl('google')); 



/**
 * ## Question 3
Write a function that is used to validate if a string is a valid email
without using a regular expression.
Example
    "gracejones@gmail.com" -> true;
    "grace@gmailcom" -> false
    "gracegmail.com" -> false
 */

function isValidEmail(email) {
    // Split the email into username and domain parts
    const [username, EmailDomain] = email.split('@');
    // Check if the email contains exactly one "@" symbol and if the domain part contains a dot
    if (EmailDomain && EmailDomain.includes('.')) {
        // If the email is valid, return true
        return true;
    } else {
        // If the email is invalid, return false
        return false;
    }
}

// check the function
console.log(isValidEmail('chidiebube@gmail.com'));
console.log(isValidEmail('chidiebubegmail.com'));
console.log(isValidEmail('chidiebube@gmailcom'));