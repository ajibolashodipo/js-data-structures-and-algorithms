// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  //code here;
  const fib = [0, 1]

  //you may take the n=0 and n=1 out actually since the function returns fib[i] anyway
  if (n == 0) return 0
  else if (n == 1) return 1
  else {
    let start = fib.length
    for (let i = start; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]
      fib.push(fib[i])
    }
    console.log(fib[n])
    return fib[n]
  }
}
fibonacciIterative(43)

function fibonacciRecursive(n) {
  //code here;
  if (n < 2) {
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(43))
