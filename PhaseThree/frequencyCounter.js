const now = require("performance-now")

//naive solution

function same(arr1, arr2) {
  //check for unequal length
  if (arr1.length !== arr2.length) {
    return false
  }

  //loop through the array
  for (let i = 0; i < arr1.length; i++) {
    //check if the square of element in 1 exist in 2
    let myEl = arr1[i] * arr1[i]
    let isIndex = arr2.indexOf(myEl)
    if (isIndex == -1) {
      return false
    }
    //splice the array
    arr2.splice(isIndex, 1)
  }
  return true
}

//better naive solution

function same2(arr1, arr2) {
  //check for unequal length
  if (arr1.length !== arr2.length) {
    return false
  }

  //square the first array
  const modArr1 = arr1.map((el) => {
    return el * el
  })
  //sort both arrays
  modArr1.sort()
  arr2.sort()

  //compare both arrays
  let isEqual = modArr1.every((el, index) => {
    return el === arr2[index]
  })

  if (!isEqual) {
    return false
  }

  return true
}

//optimal solution
function optimal(arr1, arr2) {
  //check for unequal length
  if (arr1.length !== arr2.length) {
    return false
  }

  const obj1 = {}
  const obj2 = {}

  //loop through both arrays and push them into the object
  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1
  }
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1
  }

  //compare keys
  for (let key in obj1) {
    //checks if the square of first key can be found in second object
    if (!(key ** 2 in obj2)) {
      return false
    }
    if (obj1[key] !== obj2[key ** 2]) {
      return false
    }
  }
  return true
}

function oyaRun(arr1, arr2, callback) {
  let start = now()
  console.log(callback(arr1, arr2))
  let end = now()
  console.log((end - start).toFixed(3))
}

oyaRun([1, 2, 2, 3, 3, 3, 3, 3], [1, 9, 9, 9, 9, 9, 4, 4], same)
oyaRun([1, 2, 2, 3, 3, 3, 3, 3], [1, 9, 9, 9, 9, 9, 4, 4], same2)
oyaRun([1, 2, 2, 3, 3, 3, 3, 3], [1, 9, 9, 9, 9, 9, 4, 4], optimal)
