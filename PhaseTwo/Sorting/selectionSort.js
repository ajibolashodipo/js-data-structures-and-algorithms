const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort(array) {
  //scans list for the smalllest element and swaps it for the element in the first position and on it goes

  for (let i = 0; i < array.length; i++) {
    //initialize smallest elemnt as first element
    let min = array[i]
    //j= i+1 as opposed to j=i cos it is redundant to compare an element with itself
    for (let j = i+1; j < array.length; j++) {
      //swapping condition
      if (min > array[j]) {
        //swap numbers
        temp = min
        min = array[j]
        array[j] = temp
      }
    }
    //assign minimum value to sorted array
    array[i] = min
  }
  console.log(array)
  return array
}

selectionSort(numbers)
