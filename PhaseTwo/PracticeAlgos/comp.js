function compressedString(message) {
  // Write your code here
  let myObj = {}
  let i = 0
  let j = 0
  let count = 0

  while (i < message.length) {
    // for (let j = i; j < message.length; j++) {
    if (message[i] === message[j]) {
      count++
    } else {
      i = j
    }
    // }
    j++
  }
}

//
/// abcc

function compressedString(message) {
  // Write your code here
  // message += "$"
  let result=""
  let i = 0
  let j = 0
  let count = 0

  while (j < message.length) {
    // for (let j = i; j < message.length; j++) {
    if (message[i] === message[j]) {
      	count++
    } 
    else 
    {
        if (count===1){
          result += `${message[i]}`
        }
        else{
          result += `${message[i]}${count}`
        }

        i = j
        count = 1
    }
    // }
    j++
  }
  
  if (count===1){
    result += `${message[i]}`
  }
  else{
    result += `${message[i]}${count}`
  }
  
  
  return result
}

/// count -->2 , i --> 2, j--> 4, result -> "ab"
