class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    return this.first
  }

  enqueue(value) {
    let newNode = new Node(value)

    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      let current = this.first
      //get the last node
      while (current.next) {
        current = current.next
      }
      //or use the this.last pointer instead
      //   this.last.next= newNode
      // this.last= newNode

      //add new node to last node
      current.next = newNode
      this.last = newNode
    }

    this.length++
    return this
  }

  deque() {
    let temp = this.first
    this.first = this.first.next
    this.length--

    //removes the last node if no element is left
    if (this.length === 0) {
      this.last = null
    }
    return this
  }
}

let myQueue = new Queue()
console.log(myQueue.enqueue(4))
console.log(myQueue.enqueue(5))
console.log(myQueue.enqueue(6))
console.log(myQueue.enqueue(6))
console.log(myQueue.enqueue(6))
console.log(myQueue.enqueue(7))
console.log(myQueue.deque())
console.log(myQueue.deque())
console.log(myQueue.deque())
console.log(myQueue.deque())
console.log(myQueue.deque())
// console.log(myQueue.peek())
