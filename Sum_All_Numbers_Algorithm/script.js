function sumAll(arr) {
  // Get the two numbers
  let num1 = arr[0];
  let num2 = arr[1];

  // Find min and max
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  // Sum all numbers between min and max (inclusive)
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

