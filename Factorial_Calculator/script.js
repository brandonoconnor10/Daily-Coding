// Step 1: Declare num between 1 and 20
let num = 7; // you can change this to any number between 1 and 20

// Step 2: Define the factorialCalculator function
function factorialCalculator(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Step 3: Call the function with num and store result
let factorial = factorialCalculator(num);

// Step 4: Create resultMsg string
let resultMsg = `Factorial of ${num} is ${factorial}`;

// Step 5: Output to console
console.log(resultMsg);
