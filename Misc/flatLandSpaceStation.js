function flatlandSpaceStations(n, c) {
  let max = -1
  let min
  for (let i = 0; i < n; i++) {
    let cv = c.map((el) => Math.abs(el - i))
    min = Math.min(...cv)
    max = Math.max(max, min)
  }
  return max
}

console.log(flatlandSpaceStations(5, [0, 4]))
