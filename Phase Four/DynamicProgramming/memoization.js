function fib(n, memo = []) {
  if (memo[n] != undefined) return memo[n]
  if (n <= 2) return n
  let res = fib(n - 1, memo) + fib(n - 2, memo)
  memo[n] = res
  return res
}

console.log(fib(6))
