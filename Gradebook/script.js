// Function to calculate average score
function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

// Function to return letter grade
function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Function to check if grade is passing
function hasPassingGrade(score) {
  let grade = getGrade(score);
  return grade !== "F";
}

// Function to generate student message
function studentMsg(scores, studentScore) {
  let average = getAverage(scores);
  let grade = getGrade(studentScore);
  let passed = hasPassingGrade(studentScore);

  if (passed) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}

