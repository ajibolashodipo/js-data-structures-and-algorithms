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

//more efficient solution

function flatlandSpaceStations1(n, c) {
  c.sort((a, b) => a - b)
  let len = c.length
  let leftmax = c[0]
  let rightmax = n - 1 - c[len - 1]
  let midmax = -1
  for (let i = 0; i < c.length - 1; i++) {
    let rw = Math.floor(0.5 * (c[i + 1] - c[i]))
    midmax = Math.max(midmax, rw)
  }
  let absMax = Math.max(leftmax, rightmax, midmax)
  return absMax
}

console.log(flatlandSpaceStations(5, [0, 4]))
console.log(flatlandSpaceStations1(5, [0, 4]))
