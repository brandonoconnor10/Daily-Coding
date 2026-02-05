const display = document.getElementById("display");
const pads = document.querySelectorAll(".drum-pad");

// Map keys to sound names
const soundNames = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open-HH",
  Z: "Kick-n'-Hat",
  X: "Kick",
  C: "Closed-HH"
};

// Play sound when pad clicked
pads.forEach(pad => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector("audio");
    audio.currentTime = 0;
    audio.play();
    display.textContent = soundNames[audio.id];
  });
});

// Play sound when key pressed
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (soundNames[key]) {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    display.textContent = soundNames[key];
  }
});
