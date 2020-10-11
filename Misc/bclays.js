function characterCounter(myStr) {
  var finalString = ""
  var obj1 = {}
  var lower = myStr.toLowerCase()
  for (element of lower) {
    obj1[element] = (obj1[element] || 0) + 1
  }

  //sort object keys
  var myKey = Object.keys(obj1).sort()
  var myVal = []
  myKey.forEach((k) => {
    myVal.push(obj1[k])
  })

  for (let i = 0; i < myVal.length; i++) {
    finalString += myKey[i]
    finalString += myVal[i]
  }
  console.log(finalString)
}
