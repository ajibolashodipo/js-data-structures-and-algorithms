// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here

  //base case
  if (number === 1) {
    return 1
  }
  return number * findFactorialRecursive(number - 1)
}

function findFactorialIterative(number) {
  //code here
  let answer = 1
  for (let i = number; i >= 2; i--) {
    answer = answer * i
  }
  return answer
}
console.log(findFactorialIterative(1))

console.log(findFactorialRecursive(6))
