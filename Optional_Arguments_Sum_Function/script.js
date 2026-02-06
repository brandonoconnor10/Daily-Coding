function addTogether(a, b) {
  // Helper to check if a value is a valid number
  const isNumber = (val) => typeof val === "number";

  // Case 1: Two arguments provided
  if (arguments.length === 2) {
    if (!isNumber(a) || !isNumber(b)) {
      return undefined;
    }
    return a + b;
  }

  // Case 2: Only one argument provided
  if (arguments.length === 1) {
    if (!isNumber(a)) {
      return undefined;
    }
    // Return a function waiting for the second argument
    return function (c) {
      if (!isNumber(c)) {
        return undefined;
      }
      return a + c;
    };
  }

  // If no arguments provided
  return undefined;
}

// --- Example Tests ---
console.log(addTogether(2, 3));        // 5
console.log(addTogether(23.4, 30));    // 53.4
console.log(addTogether("2", 3));      // undefined
console.log(addTogether(5, undefined));// undefined
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); // undefined
const sumTwoAnd = addTogether(2);
console.log(sumTwoAnd(3));             // 5
console.log(addTogether(5)(7));        // 12
console.log(addTogether(2)([3]));      // undefined
console.log(addTogether(2, "3"));      // undefined
