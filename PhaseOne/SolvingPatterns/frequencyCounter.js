//my implementation 1
const isArraySquared = (arr1, arr2) => {
  const trueArray = [];
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.forEach((element, index) => {
    let squared = element * element;
    let inBetween = arr2.includes(squared);

    if (inBetween) {
      trueArray[index] = "yes";
      //remove matched element from arr2
    }
  });

  console.log(trueArray);

  if (trueArray.length === arr1.length) {
    return true;
  }
  return false;
};

// console.log(isArraySquared([1, 2, 3], [4, 1, 9]));

//my implementation 2
const myArraySquared = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.forEach((element) => {
    let squared = element * element;
    console.log(arr2);
    arr2 = arr2.filter((myEl) => myEl !== squared);
  });

  if (arr2.length == 0) {
    return true;
  }
  return false;
};

console.log(myArraySquared([1, 2, 3, 2], [4, 1, 4, 9]));

//frequency counter Big O(n)
