function truncateString (str, maxLength){
    if(str.length > maxLength){
      return str.slice(0, maxLength) + "..."
    } else if(str.length <= maxLength){
      return str
    }
}

const test1 = truncateString("Brandon", 10)
console.log(test1)