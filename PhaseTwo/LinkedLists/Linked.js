// 10--->5--->16

//linked lists

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

// class Node {
//   constructor() {
//     this.value = value
//     this.next = null
//   }
// }

class LinkedList {
  //pls note that the constructor is the first linked list node
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    // const newNode = new Node(value)
    const newNode = {
      value: value,
      next: null
    }

    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head

    this.head = newNode
    this.length++
    return this
  }
 

  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      console.log("yes")
      return this.append(value)
    }

    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    return this.printList()
  }

  remove(index) {
    const leader = this.traverseToIndex(index - 1)
    const unwantedNode = leader.next
    const newPointer = unwantedNode.next
    leader.next = newPointer
    this.length--
    return this.printList()
  }

  traverseToIndex(index) {
    //Check parameters
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
}

const myLinkedList = new LinkedList(10)

console.log(myLinkedList.append(12))
console.log(myLinkedList.prepend(13))
console.log(myLinkedList.prepend(14))
console.log(myLinkedList.prepend(19))
console.log(myLinkedList.remove(3))

