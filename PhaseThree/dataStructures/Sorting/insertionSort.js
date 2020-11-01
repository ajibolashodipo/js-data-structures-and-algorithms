//my initial implementation. Very very inefficient
function insertionSort2(arr) {
  //simulates the way humans sort stuff
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr)
    if (arr[i] > arr[i + 1]) {
      //uproot the array from its current position. arr.splice() returns an array btw
      let uprootVal = arr.splice(i + 1, 1)[0]
      //loop till the right position is found
      //the looping condition below should actually begin from j=i-1 as j=i has already being compared above
      for (let j = i; j >= 0; j--) {
        if (arr[j] < uprootVal) {
          //root the array in the new place (j+1)
          arr.splice(j + 1, 0, uprootVal)
          break
        }
        if (j == 0 && arr[j] >= uprootVal) {
          arr.unshift(uprootVal)
        }
      }
    }
  }
  return arr
}

// console.log(insertionSort2([9, 8, 7, 6, 12, 5, 4, 3, 2, 1]))

//colt's algo
function insertionSort(arr) {
  var currentVal
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}

// console.log(insertionSort([3, 2, 1]))

//my revised implementation
function insertionSort3(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    let j
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] <= current) {
        break
      }
      if (arr[j] > current) {
        arr[j + 1] = arr[j]
      }
    }
    arr[j + 1] = current
  }
  return arr
}

// console.log(insertionSort3([3, 2, 1]))

function insertionSort4(arr) {
  //loop through the array
  for (let i = 1; i < arr.length; i++) {
    //save the current value of arr[i] into a variable
    let current = arr[i]
    //define j outside of the inner for loop cos of scoping concerns
    let j
    //loop from j=i-1 to enable proper comparison with i
    for (j = i - 1; j >= 0; j--) {
      //if previous is less than or equal to current, then break out of the loop cos nothing else needs to be done
      if (arr[j] <= current) {
        break
      }
      //else assign the next variable the value of the preceeding variable
      else {
        arr[j + 1] = arr[j]
      }
    }
    //when the loop ends, either by virtue of the break keyword or by natural conclusion, assign the j+1 value to current
    arr[j + 1] = current
  }
  return arr
}
console.log(insertionSort4([3, 2, 1]))
