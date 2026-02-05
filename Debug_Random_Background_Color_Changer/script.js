const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

function getRandomIndex() {
  // Use Math (capital M) and round down
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

const body = document.querySelector("body"); // camelCase method name
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code"); // use # for id

function changeBackgroundColor() {
  // Call getRandomIndex() to get a random index
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

// Make sure the id matches your index.html (likely "btn")
const btn = document.querySelector("#btn");

// Pass function reference, not function call
btn.addEventListener("click", changeBackgroundColor);
