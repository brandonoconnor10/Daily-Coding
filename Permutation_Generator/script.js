function permuteString(str, prefix = "", results = []) {
  // Base case: if string is empty, push the prefix
  if (str.length === 0) {
    results.push(prefix);
    return results;
  }

  // Recursive case: iterate over each character
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    permuteString(remaining, prefix + currentChar, results);
  }

  // Ensure uniqueness by converting to Set and back to array
  return [...new Set(results)];
}

// --- Example Tests ---
console.log(permuteString("far"));   
// [ "far", "fra", "afr", "arf", "rfa", "raf" ]

console.log(permuteString("fcc"));   
// [ "fcc", "cfc", "ccf" ]

console.log(permuteString("p"));     
// [ "p" ]

console.log(permuteString(""));      
// [""]

console.log(permuteString("walk"));  
/* [
  "walk", "wakl", "wlak", "wlka", "wkla", "wkal",
  "awlk", "awkl", "alwk", "alkw", "aklw", "akwl",
  "lawk", "lakw", "lwak", "lwka", "lkaw", "lkwa",
  "kawl", "kalw", "kwal", "kwla", "klaw", "klwa"
] */
