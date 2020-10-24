function reverse(str) {
  if (str.length <= 1) return str
  return reverse(str.slice(1)) + str[0]
}

console.log(reverse("aj"))



//very inefficient solution

// function reverse(str) {
//   const arr = str.split("")
//   const dup = [...arr]

//   function helperFunction(arr) {
//     //base case
//     if (arr.length == 0) return ""
//     //removes the last element in the array
//     arr.splice(-1, 1)
//     //recursive shit
//     return arr.slice(-1) + helperFunction(arr)
//   }

//   let final = helperFunction(arr)
//   let fi = dup[dup.length - 1] + final
//   return fi
// }
