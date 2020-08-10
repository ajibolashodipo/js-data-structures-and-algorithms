class Stack {
  constructor() {
    this.array = []
  }

  peek() {
    return this.array[this.array.length - 1]
  }

  push(value) {
    this.array.push(value)
    return this
  }

  pop() {
    this.array.pop()
    return this
  }
}

let stack = new Stack()

console.log(stack.push(4))
console.log(stack.push(4))
console.log(stack.pop())
