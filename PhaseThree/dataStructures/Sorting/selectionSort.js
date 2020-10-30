//my implementation

function selectionSort(arr) {
  //loop through the array once
  for (let i = 0; i < arr.length; i++) {
    //choose the ith index as the temporary minimum
    let min = arr[i]

    //track j and initialize it as undefined on every iteration
    let trackJ
    for (let j = i + 1; j < arr.length; j++) {
      //check for the minimum index
      if (min > arr[j]) {
        min = arr[j]

        //track the index of minimum value
        trackJ = j
      }
    }
    //at the end of the inner loop, if minimum value changed, swap
    if (arr[i] !== min) {
      swap(arr, i, trackJ)
    }
    console.log(arr)
  }
  return arr
}

function swap(arr, index1, index2) {
  var temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}
console.log(selectionSort([0, 2, 1, 23, 56, 34, 87, 90, 65]))
