function translatePigLatin(str) {
  const vowels = /[aeiou]/i;

  // Case 1: Word starts with a vowel
  if (vowels.test(str[0])) {
    return str + "way";
  }

  // Case 2: Word contains a vowel somewhere in the middle
  const vowelIndex = str.search(vowels);
  if (vowelIndex !== -1) {
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  }

  // Case 3: No vowels at all
  return str + "ay";
}

