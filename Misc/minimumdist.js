function minimumDistances(a) {
  const obj = {}
  for (let i = 0; i < a.length; i++) {
    if (a[i] in obj) {
      obj[a[i]].push(i)
    } else {
      obj[a[i]] = [i]
    }
  }

  const val = Object.values(obj)
  let filt = val.filter((el) => el.length > 1)
  if (!filt.length) return -1
  const fin = []
  filt.forEach((el) => {
    let diff = el[0] - el[1]
    fin.push(Math.abs(diff))
  })
  let min = Math.min(...fin)
  return min
}

console.log(minimumDistances([1, 3, 4, 7, 10]))
