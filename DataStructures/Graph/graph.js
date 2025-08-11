class Graph {
    constructor() {
        this.adjacencyList = {};
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
        this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
            (edge) => edge !== vertexTwo
        );

        this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
            (edge) => edge !== vertexOne
        );
    }

    removeVertex(vertex) {
        let edges = this.adjacencyList[vertex];
        while (edges.length) {
            let currentEdge = edges.pop();
            this.removeEdge(vertex, currentEdge);
        }

        delete this.adjacencyList[vertex];
    }

    depthFirstRecursive(startVertex) {
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        function traverse(vertex) {
            if (!vertex) {
                return;
            }

            visited[vertex] = true;
            result.push(vertex);

            for (const neighbor of adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    traverse(neighbor);
                }
            }
        }

        traverse(startVertex);
        return result;
    }

    depthFirstIterative(startVertex) {
        let result = [];
        let visited = {};
        let vertexStack = [startVertex];
        let adjacencyList = this.adjacencyList;

        visited[startVertex] = true;

        while (vertexStack.length) {
            let currentVertex = vertexStack.pop();
            result.push(currentVertex);

            for (const neighbor of adjacencyList[currentVertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    vertexStack.push(neighbor);
                }
            }
        }

        return result;
    }

    breadthFirst(startVertex) {
        let vertexQueue = [startVertex];
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        visited[startVertex] = true;

        while (vertexQueue.length) {
            let currentVertex = vertexQueue.shift();
            result.push(currentVertex);

            for (const neighbor of adjacencyList[currentVertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    vertexQueue.push(neighbor);
                }
            }
        }

        return result;
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
console.log("Traverse", graph.depthFirstRecursive("Sofia"));
console.log("Traverse", graph.depthFirstIterative("Sofia"));
console.log("Traverse", graph.breadthFirst("Sofia"));
graph.removeVertex("Paris");
console.log(graph.adjacencyList["Tokyo"]);
console.log(graph.adjacencyList["Sofia"]);
console.log(graph.adjacencyList["Paris"]);
console.log("Traverse", graph.depthFirstRecursive("Sofia"));
console.log("Traverse", graph.depthFirstIterative("Sofia"));
console.log("Traverse", graph.breadthFirst("Sofia"));
