const buttons = document.querySelectorAll(".favorite-icon");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("filled")) {
      btn.classList.remove("filled");
      btn.innerHTML = "&#9825;"; // empty heart
    } else {
      btn.classList.add("filled");
      btn.innerHTML = "&#10084;"; // filled heart
    }
  });
});
