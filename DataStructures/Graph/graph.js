class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            return false;
        }
        this.adjacencyList[vertex] = [];
        return this.adjacencyList[vertex];
    }

    addEdge(vertexOne, vertexTwo) {
        this.adjacencyList[vertexOne].push(vertexTwo);
        this.adjacencyList[vertexTwo].push(vertexOne);
    }

    removeEdge(vertexOne, vertexTwo) {
        this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne]
        .filter((edge) => edge !== vertexTwo);

        this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo]
        .filter((edge) => edge !== vertexOne);
    }

    removeVertex(vertex) {
        let edges = this.adjacencyList[vertex];
        while (edges.length) {
            let currentEdge = edges.pop();
            this.removeEdge(vertex, currentEdge);
        }

        delete this.adjacencyList[vertex];
    }
}

let graph = new Graph();
console.log(graph.addVertex("Tokyo"));
console.log(graph.addVertex("Tokyo"));
console.log(graph.addVertex("Sofia"));
console.log(graph.addVertex("Paris"));
graph.addEdge("Tokyo", "Sofia");
graph.addEdge("Paris", "Sofia");
console.log(graph.adjacencyList["Tokyo"]);
console.log(graph.adjacencyList["Sofia"]);
console.log(graph.adjacencyList["Paris"]);
graph.removeEdge("Sofia", "Paris");
console.log(graph.adjacencyList["Tokyo"]);
console.log(graph.adjacencyList["Sofia"]);
console.log(graph.adjacencyList["Paris"]);
graph.addEdge("Paris", "Sofia");
console.log(graph.adjacencyList["Tokyo"]);
console.log(graph.adjacencyList["Sofia"]);
console.log(graph.adjacencyList["Paris"]);
graph.removeVertex("Paris");
console.log(graph.adjacencyList["Tokyo"]);
console.log(graph.adjacencyList["Sofia"]);
console.log(graph.adjacencyList["Paris"]);
