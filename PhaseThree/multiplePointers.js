const now = require("performance-now")

//naive solution
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        // console.log([arr[i], arr[j]])
        return [arr[i], arr[j]]
      }
    }
  }
  return "Such combo does not exist"
}

//only works for sorted data
function optimalSumZero(arr) {
  let left = 0
  let right = arr.length - 1
  //loop condition
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum < 0) {
      //increase index of left
      left++
    } else {
      // reduce index of right
      right--
    }
  }
  return "Such combo does not exist"
}

function oyaRun(arr1, callback) {
  let start = now()
  console.log(callback(arr1))
  let end = now()
  console.log((end - start).toFixed(3))
}
const arrY = [-9, -8, -6, -5, -2, -1, 0, 2, 3, 4, 7, 10, 11, 12]

oyaRun(arrY, sumZero)
oyaRun(arrY, optimalSumZero)
