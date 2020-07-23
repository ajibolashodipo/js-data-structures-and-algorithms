//factorial by iterative methods

const factorial = (num) => {
  let final = 1;
  for (let i = num; i >= 1; i--) {
    final = i * final;
  }
  console.log("ajibola");
  return final;
};

console.log(factorial(5));

//factorial by recursion
const recursionFactorial = (num) => {
  if (num === 1) return 1;
  return num * recursionFactorial(num - 1);
};
console.log("shodipo");
console.log(recursionFactorial(5));
