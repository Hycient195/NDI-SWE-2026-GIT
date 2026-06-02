function validateEmail(email) {
    return email.includes("@") && email.includes(".");
}

console.log(validateEmail("nsikanikpong07@gmail.com"));