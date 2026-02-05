function spinalCase(str) {
  // Step 1: Insert a space before any uppercase letter that follows a lowercase or number
  str = str.replace(/([a-z0-9])([A-Z])/g, "$1 $2");

  // Step 2: Replace underscores and spaces with hyphens
  str = str.replace(/[_\s]+/g, "-");

  // Step 3: Convert to lowercase
  return str.toLowerCase();
}

