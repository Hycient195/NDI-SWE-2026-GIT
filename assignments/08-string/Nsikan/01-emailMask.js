
function emailMask(email){
    
    const parts = email.split("@")
    const username = parts[0]
    const domain = parts[1]
    const visible = username.slice(0,4)
    const astericks = "*".repeat(username.length-4);

    return `${visible} ${astericks} @ ${domain}`
}

console.log(emailMask("edidiong07@gmail.com"))
