// function capitalizeWords(arr) {
//   const capArr = []

//   function helper(arr) {
//     //base case
//     if (arr.length == 0) {
//       return
//     }
//     capArr.push(arr[0].toUpperCase())
//     helper(arr.slice(1))
//   }
//   helper(arr)
//   return capArr
// }

//more complex solution (without helper method)
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()]
  }
  let res = capitalizeWords(array.slice(0, -1))
  console.log(res)
  res.push(array.slice(array.length - 1)[0].toUpperCase())
  return res
}

let words = ["i", "am", "learning", "recursion"]
console.log(capitalizeWords(words)) // ['I', 'AM', 'LEARNING', 'RECURSION']
