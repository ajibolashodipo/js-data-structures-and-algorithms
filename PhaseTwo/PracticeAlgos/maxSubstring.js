function maxSubstring(s) {
  // Write your code here

  //convert string to array
  //const arr= s.split("")
  const resultArr = []
  let str = ""

  //go through the loop to get possible permutations
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      str += s[j]
      resultArr.push(str)
    }
    //reinitialize the string keeper
    str = ""
  }

  //sort the array
  resultArr.sort()

  //picked the last element on the sorted array
  const len = resultArr.length
  let choice = resultArr[len - 1]

  return choice
}
