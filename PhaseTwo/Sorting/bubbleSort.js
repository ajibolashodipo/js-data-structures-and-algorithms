const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function bubbleSort(array1) {
  const array = [...array1]
  for (let i = 0; i < array.length; i++) {
      //length-1 cos the last element is the biggest at every cycle. no need to revisit it the next timwe
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
          //swap numbers 
        temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
      }
    }
    // console.log(array)
  }
  console.log(array)
}

bubbleSort(numbers)
// console.log(numbers)
