class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")
// console.log(first)

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let newNode = new Node(val)

    if (!this.head) {
      //to clear confusion, please note that this.head and this.tail point to the same object: newNode. such that this.tail.next can actually be understood as this.head.next.
      //after setting this can do we remap the tail to the newNode
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    console.log(this)
    return this
  }

  traverse() {
    let current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }

  pop() {
    if (!this.head) {
      return undefined
    }

    //loop till the end and track the penultimate and ultimate values
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
      this.length = 0
    }
    console.log(this)
    return current
  }

  shift() {
    if (!this.head) {
      return undefined
    }

    let oldHead = this.head
    let newHead = oldHead.next
    this.head = newHead
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
      this.length = 0
    }

    console.log(oldHead.val)
    return this
  }

  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
      this.length++
      return this
    }

    let oldHead = this.head
    newNode.next = oldHead
    this.head = newNode
    this.length++
    console.log(this)
    return this
  }

  get(index) {
    //traverse the array
    if (index > this.length - 1) {
      return undefined
    }
    let current = this.head
    //fish out the wanted node
    for (let i = 0; i < index; i++) {
      //i has to stop at one less than cos of the current.next looks forward
      current = current.next
    }
    //return the value of said node
    let nodeVal = current.val
    // console.log(nodeVal)
    return current
  }

  set(index, value) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = value
    }

    console.log(this)
  }

  insert(index, value) {
    let current = this.head
    let prevNode
    let count = 0
    //set loop condition. checks if next node is valid and if count is less than index
    while (current.next && count < index) {
      prevNode = current
      current = current.next
      count++
    }
    let newNode = new Node(value)
    //remap the list
    prevNode.next = newNode
    newNode.next = current

    this.length++
    console.log(this)
    return this
  }

  remove(index) {
    //doesnt work for edge cases btw. for those, use pop, shift
    //GET THE PREVIOUS NODE
    let foundNode = this.get(index - 1)
    let removeNode = foundNode.next
    let futureNode = foundNode.next.next

    foundNode.next = futureNode
    this.length--
    return this
  }

  reverse(){
    
  }
}

let list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("GOOD")
// list.push("GO")
// list.pop()
// list.pop()
// list.pop()
// list.shift()
//list.unshift("Ajibola")
// list.get(2)
// list.set(1, "Aliyah")
// list.insert(3, "Ali")
// list.remove(1)

// console.log(list)
