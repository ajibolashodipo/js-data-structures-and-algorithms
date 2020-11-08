class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    let newNode = new Node(value)
    //check if root exists
    if (!this.root) {
      this.root = newNode
      return this
    }
    //track current root
    let current = this.root

    while (true) {
      //for tracking unwanted duplicates
      if (value === current.value) return undefined

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        //update current if node exists
        current = current.left
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode
          return this
        }
        //update current if node exists
        current = current.right
      }
    }
  }

  //my solution
  find(value) {
    if (!this.root) return false
    //start tracking
    let current = this.root
    while (true) {
      //check for equality
      if (current.value === value) return true
      //check for less than
      else if (value < current.value) {
        if (current.left === null) return false
        //update current
        current = current.left
      }
      //check for greater than
      else if (value > current.value) {
        if (current.right === null) return false
        //update current
        current = current.right
      }
    }
  }

  //alternate solution
  find2(value) {
    if (this.root === null) return false
    var current = this.root,
      found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true
      }
    }
    return false
  }
}

const tree = new BinarySearchTree()

tree.insert(100)
tree.insert(10)
tree.insert(520)
tree.insert(5)
tree.insert(52)
tree.insert(690)
console.log(tree.find(690))
// console.log(tree)
