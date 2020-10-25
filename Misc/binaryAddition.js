function binaryAddition(a, b) {
  let result = "",
    carry = 0

  while (a || b || carry) {
    //sum the last digits
    let sum = +a.slice(-1) + +b.slice(-1) + carry // get last digit from each number and sum

    if (sum > 1) {
      result = (sum % 2) + result
      carry = 1
    } else {
      result = sum + result
      carry = 0
    }

    // trim last digit (110 -> 11)
    a = a.slice(0, -1)
    b = b.slice(0, -1)
  }

  return result
}

// Tests

// let a =
//   "000010100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
// let b =
//   "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
// let answer =
//   "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"

// console.log(binaryAddition(a, b) == answer) //true

function binaryAddition2(a, b) {
  let carry = 0
  let res = ""

  while (a || b || carry) {
    //sum the unit digit
    let sum = +a.slice(-1) + +b.slice(-1) + carry

    if (sum > 1) {
      //update result string
      res = (sum % 2) + res
      carry = 1
    } else {
      res = sum + res
      carry = 0
    }

    //update string by removing last element
    a = a.slice(0, -1)
    b = b.slice(0, -1)
  }
  return res
}

let a =
  "000010100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
let b =
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
let answer =
  "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"

// console.log(binaryAddition2(111, 10) == answer) //true
console.log(binaryAddition2("111", "10")) //true
