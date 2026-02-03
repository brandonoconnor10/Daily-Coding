function diffArray(arr1, arr2) {
  // Filter items that are in arr1 but not in arr2
  const onlyInArr1 = arr1.filter(item => !arr2.includes(item));

  // Filter items that are in arr2 but not in arr1
  const onlyInArr2 = arr2.filter(item => !arr1.includes(item));

  // Combine both results
  return onlyInArr1.concat(onlyInArr2);
}

