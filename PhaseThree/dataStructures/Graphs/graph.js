class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    return this.adjacencyList
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)

    return this.adjacencyList
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((el) => el != v2)
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((el) => el != v1)
    return this.adjacencyList
  }

  removeVertex2(v1) {
    for (let el of this.adjacencyList[v1]) {
      this.adjacencyList[el] = this.adjacencyList[el].filter((j) => j != v1)
    }
    delete this.adjacencyList[v1]
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }

  depthFirstRecursive(start) {
    const result = []
    const visited = {}
    const adjacencyList = this.adjacencyList

    function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    }

    dfs(start)
    return result
  }
}

const g = new Graph()

// g.addVertex("Dallas")
// g.addVertex("Tokyo")
// g.addVertex("Aspen")
// g.addVertex("Los Angeles")
// g.addVertex("Hong Kong")
// g.addEdge("Dallas", "Tokyo")
// g.addEdge("Dallas", "Aspen")
// g.addEdge("Hong Kong", "Tokyo")
// g.addEdge("Hong Kong", "Dallas")
// g.addEdge("Los Angeles", "Hong Kong")
// g.addEdge("Los Angeles", "Aspen")
// g.removeVertex("Tokyo")

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
g.depthFirstRecursive("A")
console.log(g)

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
