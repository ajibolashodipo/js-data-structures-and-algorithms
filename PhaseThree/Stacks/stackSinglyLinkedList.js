class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
class Stack {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
      this.length++
      //   console.log(this)
      return this
    }

    this.tail.next = newNode
    this.tail = newNode
    this.length++
    // console.log(this)
    return this
  }

  pop() {
    //if head is empty
    if (!this.head) {
      return null
    }
    let prev
    let current = this.head
    //find the penultimate and ultimate nodes
    while (current.next) {
      prev = current
      current = current.next
    }
    //edge case for when one node is left to be popped
    if (this.length == 1) {
      this.head = null
      this.tail = null
      this.length--
      console.log(current.val)
      console.log(this)
      return current.val
    }

    this.tail = prev
    prev.next = null
    this.length--
    console.log(current.val)
    console.log(this)
    return current.val
  }

  shift() {
    //if head is empty
    if (!this.head) {
      return null
    }
    let oldHead = this.head
    let newHead = this.head.next
    this.head = newHead
    this.length--
    if (this.length == 0) {
      this.tail = null
    }

    console.log(oldHead.val)
    return oldHead
  }

  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
      this.length++
      console.log(newNode.val)
      return this
    }

    newNode.next = this.head
    this.head = newNode
    this.length++
    console.log(newNode.val)
    return this
  }
}

let stack = new Stack()
//pop is an O(n) operation . Push and pop from stacks must be O(1) operations. Hence we use shift and unshift
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.pop()
// stack.pop()
// stack.pop()
stack.unshift(1)
stack.unshift(2)
stack.unshift(3)
console.log("ajhsjkdfsdl")
stack.shift()
stack.shift()
stack.shift()
