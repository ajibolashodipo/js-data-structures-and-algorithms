function binarySearch(arr, val) {
  let left = 0
  let right = arr.length - 1
  let pivot = Math.floor(0.5 * (left + right))

  // console.log(`left:${left} right:${right} pivot:${pivot} value:${val} \n`)
  while (left <= right) {
    if (arr[pivot] == val) {
      // console.log("EQUAL")
      // console.log(`left:${left} right:${right} pivot:${pivot} value:${val}`)
      return pivot
    } else if (arr[pivot] < val) {
      left = pivot + 1
      pivot = Math.floor(0.5 * (left + right))
      // console.log("LESS")
      // console.log(`left:${left} right:${right} pivot:${pivot} value:${val}`)
    } else if (arr[pivot] > val) {
      right = pivot - 1
      pivot = Math.floor(0.5 * (left + right))
      // console.log("GREATER")
      // console.log(`left:${left} right:${right} pivot:${pivot} value:${val}`)
    }
  }
  return -1
}

console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 12, 13, 45, 56, 66, 89, 90], 11)
)

//ALTERNATE SOLUTION
function binarySearch2(arr, val) {
  let left = 0
  let right = arr.length - 1
  let pivot = Math.floor(0.5 * (left + right))

  while (left <= right) {
    if (arr[pivot] < val) {
      left = pivot + 1
      pivot = Math.floor(0.5 * (left + right))
    } else if (arr[pivot] > val) {
      right = pivot - 1
      pivot = Math.floor(0.5 * (left + right))
    } else {
      //check if the value exists truly
      return true
    }
  }
  return false
}
