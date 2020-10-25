function flatten(arr) {
  let newArr = []

  function helperFunction(arr) {
    //initialize for loop
    for (let i = 0; i < arr.length; i++) {
      let elem = arr[i]
      //check if element is an array
      if (Array.isArray(elem)) {
        //recurse
        helper(elem)
      } else {
        newArr.push(elem)
      }
    }
  }

  helperFunction(arr)

  return newArr
}

//newArr=[1,2,3]

// function flatten(oldArr) {
//   var newArr = []
//   for (var i = 0; i < oldArr.length; i++) {
//     if (Array.isArray(oldArr[i])) {
//       newArr = newArr.concat(flatten(oldArr[i]))
//     } else {
//       newArr.push(oldArr[i])
//     }
//   }
//   return newArr
// }

// flatten([1, 2, 3, [4, 5,6,[7,8,9,[10,11]]] ])
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
