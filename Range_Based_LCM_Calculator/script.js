function smallestCommons(arr) {
  // Step 1: Get min and max from the array
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  // Step 2: Helper function to compute GCD
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // Step 3: Helper function to compute LCM
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // Step 4: Compute LCM for the entire range
  let multiple = min;
  for (let i = min + 1; i <= max; i++) {
    multiple = lcm(multiple, i);
  }

  return multiple;
}

