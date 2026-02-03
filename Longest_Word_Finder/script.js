function findLongestWordLength(str) {
  // Split the sentence into words
  const words = str.split(" ");
  
  // Track the longest word length
  let longest = 0;
  
  for (let word of words) {
    if (word.length > longest) {
      longest = word.length;
    }
  }
  
  return longest;
}

