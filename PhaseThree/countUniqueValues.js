//solution 1

function countUniqueValues(arr) {
  const obj = {}
  for (let i of arr) {
    obj[i] = (obj[i] || 0) + 1
  }
  let unique = Object.keys(obj).length
  console.log(unique)
  return unique
}

//solution 2

function countUniqueValues2(arr) {
  let j = 0
  let count = 1

  //loop and compare curr and next
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[j]
    let next = arr[i]
    if (next !== curr) {
      j = i
      count++
    }
  }
  console.log(count)
  return count
}

countUniqueValues([1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4])
countUniqueValues2([1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4])
