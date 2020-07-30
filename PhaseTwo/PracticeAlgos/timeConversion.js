function timeConversion(s) {
  //initialize regular expression
  let am = /AM/
  let pm = /PM/
  let myAm = 0
  let myPm = 0

  //Keep track of what either AM or PM
  if (am.test(s)) myAm++
  if (pm.test(s)) myPm++

  //Replace AM/PM with nothing ("")
  s = s.replace(/[AP]M/, "")

  //Extract the string into an array using ":"
  const sArr = s.split(":")

  if (myPm) {
    if (sArr[0] === "12") {
      sArr[0] = 12
      s = sArr.join(":")
      return s
    } else {
      //add 12 to first element of array if PM
      let dyn = 12 + parseInt(sArr[0])
      sArr[0] = dyn
      s = sArr.join(":")
      return s
    }
  }

  if (myAm) {
    //subtract 12 from first element of array if AM
    if (sArr[0] === "12") {
      let dyn = "00"
      console.log(dyn)
      sArr[0] = dyn
    }

    s = sArr.join(":")
    return s
  }
}

console.log(timeConversion("12:00:00AM"))