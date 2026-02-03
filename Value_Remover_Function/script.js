function destroyer(arr, ...valuesToRemove) {
  // Filter out elements that are included in valuesToRemove
  return arr.filter(item => !valuesToRemove.includes(item));
}

