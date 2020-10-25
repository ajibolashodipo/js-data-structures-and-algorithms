function nestedEvenSum(obj) {
  let sum = 0

  function helper(obj) {
      //get keys into an array
    const myKeys = Object.keys(obj)
   
    //loop through object keys
    for (let i = 0; i < myKeys.length; i++) {
        //get individual keys
      let element = myKeys[i]
      //get sub-objects if any
      let subObj = obj[element]
      //check if subobject is truly an object
      if (isObject(subObj)) {
          //recurse
        helper(subObj)
      } else {
          //check for even value
        if (obj[element] % 2 == 0) {
          sum += obj[element]
        }
      }
    }
  }
  helper(obj)
  return sum
}

function isObject(item) {
  return typeof item === "object" && !Array.isArray(item) && item !== null
}

let obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" }
}

//nestedEvenSum(obj1); // 6
console.log(nestedEvenSum(obj2)) // 10
