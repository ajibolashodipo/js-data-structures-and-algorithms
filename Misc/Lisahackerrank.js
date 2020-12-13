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
      //
      if (list[g + 1] == 1) {
        if (obj[z].length == 3) {
          z++
          obj[z] = [list[g]]
          continue
        }

        z++
        continue
      }
      if (obj[z].length == 3) {
        console.log("bola", z, list[g])
        z++
        obj[z] = [list[g]]
        //obj[z].push(list[g])
        continue
      }
      obj[z].push(list[g])
    }
  }

  console.log(list)
  console.log(obj)

  return undefined
}

workbook(5, 3, [4, 2, 6, 1, 10])
