function longestUniqueCharacter(str) {
  let holder = ""
  let holderArr = []

  let j = 0
  for (let i = 0; i < str.length; i++) {
    if (holder.includes(str[i])) {
      holderArr[j] = holder //assign holder to array element
      holder = "" //reset holder variable
      j++ //increment j
    }
    holder += str[i] //populate holder variable with string characters
  }
  holderArr.push(holder) //push last set of characters in holder variable
  holderArr.sort((a, b) => {
    return b.length - a.length
  })
  console.log(holderArr)
}

longestUniqueCharacter("mynameisajibolashodipo")
