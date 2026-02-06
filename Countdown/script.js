// 1. Define the countdown function
function countdown(n) {
  // 2. Base case: if n < 1, return empty array
  if (n < 1) {
    return [];
  }

  // 3. Recursive case: return [n] concatenated with countdown(n - 1)
  return [n].concat(countdown(n - 1));
}

// --- Example Tests ---
console.log(countdown(-1)); // []
console.log(countdown(0));  // []
console.log(countdown(1));  // [1]
console.log(countdown(5));  // [5, 4, 3, 2, 1]
console.log(countdown(10)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
