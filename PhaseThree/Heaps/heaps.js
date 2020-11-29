class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12]
  }

  insert(element) {
    this.values.push(element)
    this.bubbleUp()
    return this.values
  }

  bubbleUp() {
    let arr = this.values
    let curr = this.values.length - 1
    let parent = Math.floor(0.5 * (curr - 1))

    while (arr[curr] > arr[parent] && curr > 0) {
      //swap
      this.swap(arr, curr, parent)
      curr = parent
      parent = Math.floor(0.5 * (curr - 1))
    }
  }

  swap(arr, curr, parent) {
    let temp = arr[curr]
    arr[curr] = arr[parent]
    arr[parent] = temp
  }

  extractMax() {
    //replacing first element with last and remove. you get
    const max = this.values[0]
    const end = this.values.pop()
    this.values[0] = end

    //trickle down
    this.sinkDown()
    return max
  }
  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]

    while(true){
        let leftChildIdx= 2*idx +1
        let rightChildIdx= 2*idx +2  

    }
  }
}

let heap = new MaxBinaryHeap()

console.log(heap.insert(55))

console.log(heap.insert(11))
console.log(heap.insert(45))
