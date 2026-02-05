function myReplace(str, before, after) {
  // Check if the first character of 'before' is uppercase
  if (before[0] === before[0].toUpperCase()) {
    // Capitalize the first character of 'after'
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    // Lowercase the first character of 'after'
    after = after[0].toLowerCase() + after.slice(1);
  }

  // Replace the word
  return str.replace(before, after);
}

