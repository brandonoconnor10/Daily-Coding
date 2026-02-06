// Define the function
function rangeOfNumbers(startNum, endNum) {
  // Base case: if startNum equals endNum, return [startNum]
  if (startNum === endNum) {
    return [startNum];
  }

  // Recursive case: build the array from startNum to endNum
  return [startNum].concat(rangeOfNumbers(startNum + 1, endNum));
}

// --- Example Tests ---
console.log(rangeOfNumbers(1, 5));   // [1, 2, 3, 4, 5]
console.log(rangeOfNumbers(6, 9));   // [6, 7, 8, 9]
console.log(rangeOfNumbers(4, 4));   // [4]
console.log(rangeOfNumbers(10, 15)); // [10, 11, 12, 13, 14, 15]
console.log(rangeOfNumbers(2, 8));   // [2, 3, 4, 5, 6, 7, 8]
