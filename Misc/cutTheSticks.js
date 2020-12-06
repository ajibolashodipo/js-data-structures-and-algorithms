function cutTheSticks(arr) {
  let res = []
  let temp = []
  let my

  res.push(arr.length)

  while (arr.length) {
    temp = []
    let mini = Math.min(...arr)
    for (let num of arr) {
      my = num - mini
      if (my) temp.push(my)
    }

    arr = temp

    if (temp.length) res.push(temp.length)
  }
  return res
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]))
