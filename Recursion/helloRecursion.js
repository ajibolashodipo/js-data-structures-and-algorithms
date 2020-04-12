// recursion is simpler and easier to understand. iykyk

//Call Stack
//function calls are added on the top of the stack and popped off after they return

//two things must be present:
//base case: condition when shit has to stop

function countDown(num) {
  if (num <= 0) {
    console.log("all done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

//countDown(7);

//second recursive function
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

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
