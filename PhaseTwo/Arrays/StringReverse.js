//Create a function that reverses a string

function reverse(string) {
  //check inputs

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
  for (let j = length - 1; j >= 0; j--) {
    revArr.push(arr[j])
  }

  //convert back to string
  return revArr.join("")
}

//Alitre
function reverse2(string) {
  return string.split("").reverse().join("")
}

console.log(reverse("ajibola is awesome"))
console.log(reverse2("ajibola is awesome"))
