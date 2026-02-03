function mutation(arr) {
  // Convert both strings to lowercase for case-insensitive comparison
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();

  // Check if every character in str2 exists in str1
  for (let char of str2) {
    if (str1.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}

