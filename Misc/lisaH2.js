function workbook(n, k, arr) {
  const list = []
  const obj = {}
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      list.push(j)
    }
  }
  let z = 1

  for (let g = 0; g < list.length; g++) {
    if (!(z in obj)) {
      obj[z] = [list[g]]
    } else {
      //check if array length==3
      if (obj[z].length == 3) {
        //create new key:value
        z++
        obj[z] = [list[g]]
        continue
      }

      if (list[g] == 1) {
        z++
        obj[z] = [list[g]]
        continue
      }
      obj[z].push(list[g])
    }
  }
  let count = 0

  for (let key in obj) {
    if (obj[key].includes(parseInt(key))) count++
  }

  console.log(list)
  console.log(obj)

  console.log(count)
  return count
}

workbook(5, 3, [4, 2, 6, 1, 10])
