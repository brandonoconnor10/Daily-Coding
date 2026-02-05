// 1. Create a variable named currentDate
const currentDate = new Date();

// 2. Create a variable named currentDateFormat
const currentDateFormat = `Current Date and Time: ${currentDate}`;

// 3. Log the value of currentDateFormat
console.log(currentDateFormat);

// 4. Function formatDateMMDDYYYY
function formatDateMMDDYYYY(dateObj) {
  const month = dateObj.getMonth() + 1; // Months are zero-based
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();

  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}

// 7. Function formatDateLong
function formatDateLong(dateObj) {
  // Use en-US locale for formatting
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formatted = dateObj.toLocaleDateString("en-US", options);

  return `Formatted Date (Month Day, Year): ${formatted}`;
}

