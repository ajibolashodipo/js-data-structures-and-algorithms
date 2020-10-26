//MINE
function naiveStringSearch(big, sub) {
  let count = 0
  let temp = ""
  //loop through first string
  for (let i = 0; i < big.length; i++) {
      //loop through the second string
    for (let j = 0; j < sub.length; j++) {
        //if characters in both strings match, add said xter to temp variable
      if (sub[j] == big[i + j]) {
        temp += sub[j]
        //when temp equals substring, update count and reset temp
        if (temp == sub) {
          count++
          temp = ""
          break
        }
        //if they dont match, brother you gotta break out of the inner loop
      } else {
        break
      }
    }
  }
  return count
}

//COLT'S. got it

function naiveSearch(long, short) {
  var count = 0
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break
      if (j === short.length - 1) count++
    }
  }
  return count
}

// naiveSearch("lorie loled", "lol")
//console.log(naiveSearch("SERENDHAHAIPITYHAHAHAHA", "HAHA"))

console.log(naiveStringSearch("lorie loled", "lo"))
