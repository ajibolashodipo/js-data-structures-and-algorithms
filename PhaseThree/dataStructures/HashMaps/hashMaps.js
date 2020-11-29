 class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(key, value) {
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
    // console.log(this.data)
  }

  get(key) {
    let address = this._hash(key)
    const currentBucket = this.data[address]

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          console.log(currentBucket[i][1])
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }

  keys() {
    const keyArr = []
    let bucket = this.data

    if (bucket.length == 0) {
      return undefined
    }
    for (let superb of bucket) {
      if (superb && superb.length == 1) {
        keyArr.push(superb[0][0])
      }
      //check for collisions
      else if (superb && superb.length > 1) {
        for (let sub of superb) {
          keyArr.push(sub[0][0])
        }
      }
    }
    console.log(keyArr)
    return keyArr
  }
}

const myHashTable = new HashTable(50)
myHashTable.set("grapes", 10000)
myHashTable.get("grapes")
myHashTable.set("apples", 9)
myHashTable.get("apples")
myHashTable.keys()
