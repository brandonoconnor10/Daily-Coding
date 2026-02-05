// Access required elements
const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

// Function to get flags
function getFlags() {
  let flags = "";
  if (caseInsensitiveFlag.checked) flags += "i";
  if (globalFlag.checked) flags += "g";
  return flags;
}

// Event listener for test button
testButton.addEventListener("click", () => {
  const patternValue = regexPattern.value;
  const flags = getFlags();

  try {
    const regex = new RegExp(patternValue, flags);
    const testStr = stringToTest.innerHTML;

    const matches = testStr.match(regex);

    if (matches) {
      // Highlight matches
      const highlighted = testStr.replace(regex, (match) => {
        return `<span class="highlight">${match}</span>`;
      });
      stringToTest.innerHTML = highlighted;

      // Display matches in #result
      if (flags.includes("g")) {
        const allMatches = testStr.match(regex);
        testResult.textContent = allMatches.join(", ");
      } else {
        testResult.textContent = matches[0];
      }
    } else {
      testResult.textContent = "no match";
    }
  } catch (err) {
    testResult.textContent = "Invalid regex pattern";
  }
});
