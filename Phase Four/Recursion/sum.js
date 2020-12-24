// O(n^2) recursive inefficient solution
function sum(arr) {
  if (arr.length == 0) return 0
  let sl = arr.slice(1)
  return arr[0] + sum(sl)
}

//o(n) efficient solution
//here we go through the code just once by updating the index variable as we go along. very impressive solution

function sum1(arr) {
  return sumHelper(arr, 0)
}

function sumHelper(arr, index) {
  if (arr.length == index) return 0
  return arr[index] + sumHelper(arr, index + 1)
}

console.log(sum([1, 2, 3, 4, 5]))
console.log(sum1([1, 2, 3, 4, 5]))
