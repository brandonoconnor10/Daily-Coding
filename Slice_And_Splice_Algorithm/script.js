function frankenSplice(arr1, arr2, n) {
  // Make a shallow copy of arr2 so the original is not changed
  let result = arr2.slice();

  // Insert all elements of arr1 into result starting at index n
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n + i, 0, arr1[i]);
  }

  return result;
}

