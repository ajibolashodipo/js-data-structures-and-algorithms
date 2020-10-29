//inefficient bubble sort solution

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      //swapping condition
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

//optimized algo
function bubbleSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      //swapping condition
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
    console.log(arr)
  }
  return arr
}

//for almost sorted array optimization. use variable noSwaps

function bubbleSort3(arr) {
  let noSwaps
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true
    for (let j = 0; j < arr.length - i - 1; j++) {
      //swapping condition
      if (arr[j] > arr[j + 1]) {
        noSwaps = false
        swap(arr, j, j + 1)
      }
    }
    if (noSwaps) break
    console.log(arr)
  }
  return arr
}

function swap(arr, index1, index2) {
  var temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

bubbleSort3([8, 1, 2, 3, 4, 5])
