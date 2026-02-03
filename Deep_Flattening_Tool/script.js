function steamrollArray(arr) {
  // Recursive helper function to flatten
  return arr.reduce((flat, item) => {
    if (Array.isArray(item)) {
      // If item is an array, recursively flatten it
      return flat.concat(steamrollArray(item));
    } else {
      // Otherwise, just add the item
      return flat.concat(item);
    }
  }, []);
}

