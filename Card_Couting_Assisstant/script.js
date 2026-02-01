// Global count variable
let count = 0;

function cardCounter(card) {
  // Increase count for 2–6
  if (card >= 2 && card <= 6) {
    count++;
  }
  // No change for 7–9
  else if (card >= 7 && card <= 9) {
    count += 0;
  }
  // Decrease count for 10, J, Q, K, A
  else if (
    card === 10 ||
    card === "J" ||
    card === "Q" ||
    card === "K" ||
    card === "A"
  ) {
    count--;
  }

  // Decision: Bet if positive, Hold otherwise
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
