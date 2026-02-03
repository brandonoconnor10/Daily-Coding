function titleCase(str) {
  // Split the string into words
  let words = str.split(" ");

  // Transform each word
  let result = words.map(word => {
    let firstLetter = word.charAt(0).toUpperCase();
    let rest = word.slice(1).toLowerCase();
    return firstLetter + rest;
  });

  // Join back into a single string
  return result.join(" ");
}

