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
    this.adjacencyList[v1].filter((el) => el != v2)
    this.adjacencyList[v2].filter((el) => el != v1)
    return this.adjacencyList
  }
}

const graph = new Graph()

graph.addVertex("dallas")
graph.addVertex("tokyo")
graph.addEdge("dallas", "tokyo")

console.log(graph)
