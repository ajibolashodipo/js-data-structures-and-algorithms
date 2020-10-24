function someRecursive(arr, callback) {
  if (arr.length == 0) return false
  let res = callback(arr[0])
  if (res) return true
  return someRecursive(arr.slice(1), callback)
}

let isOdd = (val) => val % 2 !== 0

console.log(someRecursive([8, 6, 2,1, 30, 4], isOdd))
