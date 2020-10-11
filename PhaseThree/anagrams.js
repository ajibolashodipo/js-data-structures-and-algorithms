const now = require("performance-now")

//first solution
function valAnagram(str1, str2) {
  //check for unequal length
  if (str1.length !== str2.length) {
    return false
  }
  const strArr1 = str1.split("")
  strArr1.sort()
  const strArr2 = str2.split("")
  strArr2.sort()

  //compare both strings
  let result = strArr1.every((el, index) => {
    return el === strArr2[index]
  })

  if (result) {
    return true
  }
  return false
}

//regular solution
function validAnagram(str1, str2) {
  //check for unequal length
  if (str1.length !== str2.length) {
    return false
  }
  const obj1 = {}
  const obj2 = {}

  for (let el in str1) {
    obj1[el] = (obj1[el] || 0) + 1
  }
  for (let el in str2) {
    obj2[el] = (obj2[el] || 0) + 1
  }

  //compare keys, then values
  for (let el in obj1) {
    if (!(el in obj2)) {
      return false
    }
    if (obj1[el] !== obj2[el]) {
      return false
    }
  }
  return true
}

//more optimal solution
function optimalValidAnagram(str1, str2) {
  //check for unequal length
  if (str1.length !== str2.length) {
    return false
  }
  const obj1 = {}
  for (let el in str1) {
    obj1[el] = (obj1[el] || 0) + 1
  }

  //then loop through string 2
  for (let el in str1) {
    //check if the current element exists in the obj1 object
    if (!(el in obj1)) {
      return false
    }
    //else reduce the frequency by 1
    else {
      obj1[el] -= 1
    }
  }
  return true
}

function oyaRun(str1, str2, callback) {
  let start = now()
  console.log(callback(str1, str2))
  let end = now()
  console.log("This code ran in " + (end - start).toFixed(3) + " milliseconds")
}

let s1 = "hydroxydeoxycorticosterones"
let s2 = "hydroxydeoxycorticosteronse"
oyaRun(s1, s2, valAnagram)
oyaRun(s1, s2, validAnagram)
oyaRun(s1, s2, optimalValidAnagram)
