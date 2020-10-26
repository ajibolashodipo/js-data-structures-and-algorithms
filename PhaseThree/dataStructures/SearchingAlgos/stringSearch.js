//MINE
function naivaStringSearch(big, sub) {
  let count = 0
  let temp = ""
  for (let i = 0; i < big.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (sub[j] == big[i + j]) {
        temp += sub[j]
        if (temp == sub) {
          count++
          temp = ""
          break
        }
      } else {
        break
      }
    }
  }
  return count
}

//COLT'S

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

console.log(naivaStringSearch("lorie loled", "lol"))
