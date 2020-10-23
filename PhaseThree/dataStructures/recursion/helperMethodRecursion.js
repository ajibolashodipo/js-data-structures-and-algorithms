//contains an outer function that is not recursive that calls an inner function that is recursive 


function collectOddValues(arr) {
  let result = []

  function helper(helperInput) {
    if (helperInput.length == 0) return

    if (helperInput[0] % 2) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }

  helper(arr)
  return result
}

console.log(collectOddValues([1, 4, 5, 23, 6, 2, 78, 65, 89]))
