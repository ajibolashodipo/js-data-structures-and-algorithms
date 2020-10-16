class Array {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }
  push(val) {
    this.data[this.length] = val
    this.length++
  }

  pop() {
    let lastItem = this.data[this.length - 1]

    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  delete(index) {
    const toDelete = this.data[index]
    delete this.data[index]

    //reorder (remap) the array
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    //delete the last key pointing to a stale value
    delete this.data[this.length - 1]
    //reduce length of array
    this.length--
    return toDelete
  }
}

const newArray = new Array()
newArray.push(4)
newArray.push(5)
newArray.push(2)
newArray.push(3)
newArray.push(5)
newArray.push(6)

console.log(newArray)
console.log(newArray.delete(1))
console.log(newArray.delete(1))
console.log(newArray.delete(1))
console.log(newArray)
