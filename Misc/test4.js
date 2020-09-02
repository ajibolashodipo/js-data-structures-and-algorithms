// const regexp = /t(e)(st(\d?))/g
const regexp = /aaaa/
const str = "aaaaaa"

const array = [...str.matchAll(regexp)]

console.log(array[0])
// expected output: Array ["test1", "e", "st1", "1"]

// console.log(array[1])
// expected output: Array ["test2", "e", "st2", "2"]
