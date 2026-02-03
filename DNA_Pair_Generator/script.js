function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  let result = [];

  for (let i = 0; i < str.length; i++) {
    let base = str[i];
    result.push([base, pairs[base]]);
  }

  return result;
}

