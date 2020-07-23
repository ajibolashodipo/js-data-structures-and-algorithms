//function accepts a number and returns the nth number of the fibonacci sequence
//1,1,2,3,5,8,13,21,34,55

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

//FIBONACCI SOLUTION
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
