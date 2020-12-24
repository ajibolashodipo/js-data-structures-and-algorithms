// O(n^2) recursive inefficient solution
// function sum(arr) {
//   if (arr.length == 0) return 0
//   let sl = arr.slice(1)
//   return arr[0] + sum(sl)
// }

//o(n) efficient solution

function sum(arr) {
  return sumHelper(arr, 0)
}

function sumHelper(arr, index) {
  if (arr.length == index) return 0
  return arr[index] + sumHelper(arr, index + 1)
}

console.log(sum([1, 2, 3, 4, 5]))
