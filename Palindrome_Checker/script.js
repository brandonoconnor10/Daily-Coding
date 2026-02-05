const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function isPalindrome(str) {
  // Remove non-alphanumeric characters and make lowercase
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

checkBtn.addEventListener("click", () => {
  const inputVal = textInput.value;

  if (inputVal === "") {
    alert("Please input a value.");
    return;
  }

  if (isPalindrome(inputVal)) {
    result.textContent = `${inputVal} is a palindrome`;
  } else {
    result.textContent = `${inputVal} is not a palindrome`;
  }
});
