function doSomething(pattern, blobs) {
  let splitArr = blobs.split("|")
  let sum = 0
  let patternLength= pattern.length
  const blobCount = []

  if (!pattern) {
    splitArr.forEach((el) => {
      blobCount.push(sum)
    })
    blobCount.push(sum)
    let stringBlob = blobCount.join("|")
    console.log(stringBlob)
    return stringBlob
  }

  splitArr.forEach((el) => {
      let count=0
      let regexLength= el.length- patternLength
    for (let i=0; i<=regexLength; i++){
        if(pattern ===el.slice(i,(i+patternLength))){
            count++
        }
    }
    sum += count
    blobCount.push(count)
  })
  //push sum to array
  blobCount.push(sum)
  //convert to string
  let stringBlob = blobCount.join("|")
  console.log(stringBlob)
  return stringBlob
}

doSomething("aa", "aaa|aaa")
