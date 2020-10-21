class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedLists {
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
    } else {
      //complete the mapping of the new node using the existing tail
      this.tail.next = newNode
      newNode.prev = this.tail
      //then remap the tail
      this.tail = newNode
      this.length++
      //   console.log(this)
      return this
    }
  }
  pop() {
    if (!this.head) {
      return undefined
      //   console.log(this)
    }

    if (this.length == 1) {
      this.head = null
      this.tail = this.head
      this.length--
      return this
    }
    //go from the back
    let removed = this.tail
    //set new tail to second to the last element
    this.tail = removed.prev
    //remap tail to null
    this.tail.next = null
    //sever this bond as well
    removed.prev = null
    this.length--
    console.log(removed.val)
    console.log(this)
    return this
  }
  shift() {
    if (!this.head) {
      return undefined
      //   console.log(this)
    }

    if (this.length == 1) {
      this.head = null
      this.tail = this.head
      this.length--
      return this
    }
    let oldHead = this.head
    let newHead = oldHead.next
    oldHead.next = null
    newHead.prev = null
    this.length--
    return this
  }
}

let dll = new DoublyLinkedLists()
dll.push(5)
dll.push(12)
dll.push(23)
dll.pop()
