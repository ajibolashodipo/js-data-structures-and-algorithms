class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  //add to the end, remove from the beginning

  enque(val) {
    let newNode = new Node(val)

    if (!this.first) {
      //to clear confusion, please note that this.first and this.last point to the same object: newNode. such that this.last.next can actually be understood as this.first.next.
      //after setting this can do we remap the.last to the newNode
      this.first = newNode
      this.last = this.first
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
    console.log(newNode.val)
    return this
  }

  dequeue() {
    let oldHead = this.first
    let newHead = this.first.next
    this.first = newHead
    this.size--

    if (this.size == 0) {
      this.last = null
    }

    console.log(oldHead.val)
    return this
  }
}

let queue = new Queue()
queue.enque(1)
queue.enque(2)
queue.enque(3)
// console.log("ajibolsa")
queue.dequeue()
queue.dequeue()
queue.dequeue()
