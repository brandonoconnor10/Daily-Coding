function maskEmail (email){
    // Find the position of the @ symbol
    const atIndex =  email.indexOf('@')

    // Split username and domain
    const username = email.slice(0, atIndex)
    const domain = email.slice(atIndex)

    // First and last character of username
    const firstChar = username[0]
    const lastChar  = username[username.length - 1]

    // Mask the middle characters with asterisks
    const maskedMiddle = "*".repeat(username.length - 2)

    // Build the masked email
    return firstChar + maskedMiddle + lastChar + domain
}

let email = "apple.pie@example.com"; 
console.log(maskEmail(email));