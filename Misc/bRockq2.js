function doSomething(pattern, blobs) {
  let splitArr = blobs.split("|")
  let sum = 0
const blobCount = []

  if(!pattern){
      splitArr.forEach(el=>{
        blobCount.push(sum)
      })
      blobCount.push(sum)
      let stringBlob = blobCount.join("|")
      console.log(stringBlob)
      return stringBlob
  }
  
  splitArr.forEach((el) => {
    //match with regular expressions
    let exp = new RegExp(pattern, "g")
    let count = (el.match(exp) || []).length
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

doSomething("","asas|asweporkpwekropwasasertorepoas|as")