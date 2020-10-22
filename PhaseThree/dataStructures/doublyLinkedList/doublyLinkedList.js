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
      return this
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
    this.head = oldHead.next
    oldHead.next = null
    this.head.prev = null
    this.length--
    console.log(this)
    return this
  }

  unshift(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
      this.length++
      //   console.log(this)
      return this
    }
    //get old head
    let oldHead = this.head
    //assign old head's prev to new head
    oldHead.prev = newNode
    //assign new head to new node
    this.head = newNode
    //map the next property to the old head
    newNode.next = oldHead
    this.length++
    console.log(this)
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      console.log(null)
      return null
    }

    if (index <= this.length / 2) {
      console.log("working from start")
      let current = this.head
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      let found = current
      console.log(found.val)
      return found
    } else {
      console.log("working from end")
      let current = this.tail
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev
      }
      let found = current
      console.log(found.val)
      return found
    }
  }

  set(index, value) {
    let current = this.get(index)

    if (current) {
      current.val = value
      console.log(current)
      return current
    }
    return null
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return this.unshift(val)
    if (index === this.length) return this.push(val)
    //create new node
    let newNode = new Node(value)
    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next

    //remap the connections
    beforeNode.next = newNode
    newNode.prev = beforeNode
    newNode.next = afterNode
    afterNode.prev = newNode
    this.length++
    console.log(this)
    return true
  }
  remove(index) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return this.shift(val)
    if (index === this.length) return this.pop()

    let beforeNode = this.get(index - 1)
    let removed = beforeNode.next
    let afterNode = beforeNode.next.next

    //remap stuff
    beforeNode.next = afterNode
    afterNode.prev = beforeNode
    removed.next = null
    removed.prev = null
    this.length--
    console.log(removed)
    return removed
  }
}

let dll = new DoublyLinkedLists()
dll.push(5)
dll.push(12)
dll.push(23)
dll.push(5)

// dll.pop()
// dll.shift()
// dll.unshift(100)
dll.get(3)
dll.set(3, "AdemolA")
dll.insert(1, "OKEE")
dll.remove(2)
