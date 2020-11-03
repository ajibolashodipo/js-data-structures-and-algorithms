//my modified solution.

function mergeSortedArrays(arr1, arr2) {
  let first = arr1.length
  let second = arr2.length
  let i = 0
  let j = 0
  const merged = []

  while (i < first || j < second) {
    console.log(i, j)
    if (arr2[j] === undefined || arr1[i] <= arr2[j]) {
      merged.push(arr1[i])
      i++
    } else {
      merged.push(arr2[j])
      j++
    }
  }
  console.log(merged)
  return merged
}

function merge(arr1, arr2) {
  let len1 = arr1.length
  let len2 = arr2.length
  let i = 0
  let j = 0
  const merged = []

  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i])
      i++
    } else {
      merged.push(arr2[j])
      j++
    }
  }

  //loop through the rest if arr1 is longer than arr2
  while (i < len1) {
    merged.push(arr1[i])
    i++
  }
  //loop through the rest if arr2 is longer than arr1
  while (j < len2) {
    merged.push(arr2[j])
    j++
  }
  console.log(merged)
  return merged
}
mergeSortedArrays([1, 10, 50], [3, 4, 6, 30])
merge([1, 10, 50], [3, 4, 6, 30])

//line 15 explanation
//the logic is beautiful really
// so the logic OR gives us four possibilities
//     F||T: Second array exists || arr1<arr2
//     T||F: Second array DOESNT exist || arr1>=arr2
//     T||T : Second array DOESNT exist || arr1<=arr2
//     F||F: Second array exists || arr1>arr2
//     for the first 3 options, you evaluate the statement within the if block. Else, you go to the else block.
//Makes perfect sense

// function mergeSortedArrays2(array1, array2) {
//   const mergedArray = []
//   let array1Item = array1[0]
//   let array2Item = array2[0]
//   let i = 1
//   let j = 1

//   //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
//   if (array1.length === 0) {
//     return array2
//   }
//   if (array2.length === 0) {
//     return array1
//   }

//   while (array1Item || array2Item) {
//     if (array2Item === undefined || array1Item < array2Item) {
//       mergedArray.push(array1Item)
//       array1Item = array1[i]
//       i++
//     } else {
//       mergedArray.push(array2Item)
//       array2Item = array2[j]
//       j++
//     }
//   }
//   console.log(mergedArray)
//   return mergedArray
// }

//mergeSortedArrays([0, 3, 4], [4, 6, 30])
