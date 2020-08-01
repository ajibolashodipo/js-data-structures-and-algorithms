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
}

const myLinkedList = new LinkedList(10)

console.log(myLinkedList.append(12))
console.log(myLinkedList.prepend(13))
