function recurringNumber(arr) {
  const obj = {}
  for (let i of arr) {
    obj[i] = (obj[i] || 0) + 1

    if (obj.hasOwnProperty(i) && obj[i] > 1) {
      return i
    }
  }
  return undefined
}

function firstRecurringCharacter2(input) {
  let map = {}
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      console.log(map)
      return input[i]
    } else {
      map[input[i]] = 1
    }
  }
  return undefined
}

console.log(firstRecurringCharacter2([2, 1, 51, 6, 1, 3, 5]))

// console.log(recurringNumber([2, 1, 51, 6, 1, 3, 5]))
