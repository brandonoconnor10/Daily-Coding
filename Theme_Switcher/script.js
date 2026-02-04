const switcherBtn = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const liveMsg = document.querySelector("[aria-live='polite']");

const themes = [
  { name: "light", message: "Light theme activated 🌞" },
  { name: "dark", message: "Dark theme activated 🌙" }
];

// Toggle dropdown visibility
switcherBtn.addEventListener("click", () => {
  const expanded = switcherBtn.getAttribute("aria-expanded") === "true";

  if (expanded) {
    dropdown.hidden = true;
    switcherBtn.setAttribute("aria-expanded", "false");
  } else {
    dropdown.hidden = false;
    switcherBtn.setAttribute("aria-expanded", "true");
  }
});

// Handle theme selection
dropdown.querySelectorAll("[role='menuitem']").forEach(item => {
  item.addEventListener("click", () => {
    const themeName = item.textContent.toLowerCase();

    // Remove existing theme classes
    document.body.classList.remove(...themes.map(t => `theme-${t.name}`));

    // Add selected theme class
    document.body.classList.add(`theme-${themeName}`);

    // Find theme message
    const themeObj = themes.find(t => t.name === themeName);
    if (themeObj) {
      liveMsg.textContent = themeObj.message;
    }

    // Close dropdown after selection
    dropdown.hidden = true;
    switcherBtn.setAttribute("aria-expanded", "false");
  });
});
