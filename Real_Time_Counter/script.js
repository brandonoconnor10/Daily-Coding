const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  let inputText = textInput.value;

  // Trim if more than 50 characters
  if (inputText.length > 50) {
    inputText = inputText.slice(0, 50);
    textInput.value = inputText;
  }

  const count = inputText.length;

  // Update the character count display
  charCount.textContent = `Character Count: ${count}/50`;

  // Turn red if max reached
  if (count === 50) {
    charCount.classList.add("red");
  } else {
    charCount.classList.remove("red");
  }
});
