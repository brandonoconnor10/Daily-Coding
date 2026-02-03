function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    // Get the character codes of current and next letters
    let currentCode = str.charCodeAt(i);
    let nextCode = str.charCodeAt(i + 1);

    // If the next letter is not consecutive, return the missing one
    if (nextCode !== currentCode + 1) {
      return String.fromCharCode(currentCode + 1);
    }
  }
  // If no letters are missing, return undefined
  return undefined;
}

