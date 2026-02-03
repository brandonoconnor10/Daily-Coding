function getIndexToIns(arr, num) {
  // Step 1: Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Step 2: Use findIndex to locate the lowest index where num fits
  let index = arr.findIndex(value => num <= value);

  // Step 3: If no index is found (num is larger than all elements), return arr.length
  return index === -1 ? arr.length : index;
}
