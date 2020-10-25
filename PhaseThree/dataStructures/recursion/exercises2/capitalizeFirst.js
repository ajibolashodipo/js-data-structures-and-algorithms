function capitalizeFirst(arr) {
  const newArr = []

  function helper(arr) {
    if (arr.length == 0) {
      return
    }
    let myStr = arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1)
    newArr.push(myStr)
    return helper(arr.slice(1))
  }

  helper(arr)
  return newArr
}

console.log(capitalizeFirst(["car", "taco", "banana"]))
