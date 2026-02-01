// Checking if input string ends with the string in outputStr , cant use endsWith method
const confirmEnding = (inputStr, outputStr) => {
  if(inputStr.slice(-outputStr.length) === outputStr){
    return true
  } else{
    return false
  }
}

