//Create a function that reverses a string

function reverse(string) {
  //initialize array
  const arr = []
  const revArr = []

  //get string length
  let length = string.length

  //convert the string to array
  for (let i = 0; i < length; i++) {
    arr[i] = string[i]
  }

  //reverse the array
  for (let j = arr.length - 1; j >= 0; j--) {
    revArr.push(arr[j])
  }

  //convert back to string
  return revArr.join("")
}

console.log(reverse("ajibola is awesome"))
