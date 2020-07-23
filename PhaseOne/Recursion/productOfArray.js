//Write a recursive function that takes an array and return the product of its elements

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

//Remember that the outer function only exists to prevent the reinitialization of the tracker variable on every recursion call.

function productOfArray(arr) {
  //initialize tracker variable
  let tracker = 1;

  //main recursive function
  function recursiveReal(arr) {
    //updates the value of tracker by multiplying tracker by the first element of the updated array
    tracker *= arr[0];
    //base (stopping ) condition
    if (arr.length === 1) return;
    //recursion call
    recursiveReal(arr.slice(1));
  }

  //recursive function call
  recursiveReal(arr);

  return tracker;
}

console.log(productOfArray([1, 2, 3, 40]));
