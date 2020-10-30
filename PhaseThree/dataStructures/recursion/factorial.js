function factorial(num) {
  //base case
  if (num == 1) return 1
  return num * factorial(num - 1)
}

console.log(factorial(5))

//for exploring how variables work with recursive calls
function factorial2(num) {
  //base case
  if (num == 1) return 1
  let res = num * factorial2(num - 1)
  console.log(res, num)
  return res
}

//console.log(factorial(5))

console.log(factorial2(5))
