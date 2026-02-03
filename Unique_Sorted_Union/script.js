function uniteUnique(...arrays) {
  let result = [];

  for (let arr of arrays) {
    for (let value of arr) {
      if (!result.includes(value)) {
        result.push(value);
      }
    }
  }

  return result;
}

