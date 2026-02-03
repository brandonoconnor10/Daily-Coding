// Step 1: Create the generatePassword function
function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let result = "";

  for (let i = 0; i < length; i++) {
    // Pick a random character from the characters string
    let randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

// Step 2: Call the function with a numeric argument
let password = generatePassword(12); // you can choose any length you want

// Step 3: Log the result with the required format
console.log("Generated password: " + password);
