// Define the function
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return year + " is a leap year.";
  } else {
    return year + " is not a leap year.";
  }
}

// Declare a year variable
let year = 2024;

// Call the function and store the result
let result = isLeapYear(year);

// Output the result
console.log(result);
