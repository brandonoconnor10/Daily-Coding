function dropElements(arr, func) {
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      // Return the remaining elements starting from the first match
      return arr.slice(i);
    }
  }
  // If no element satisfies the condition, return an empty array
  return [];
}

