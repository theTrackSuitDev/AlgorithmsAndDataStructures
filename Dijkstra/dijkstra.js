class WeightedGraph {
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

    addEdge(vertexOne, vertexTwo, weight) {
        this.adjacencyList[vertexOne].push({ node: vertexTwo, weight });
        this.adjacencyList[vertexTwo].push({ node: vertexOne, weight });
    }

    log() {
        for (const key in this.adjacencyList) {
            const element = this.adjacencyList[key];
            console.log(key, ":");
            element.forEach((edge) => {
                console.log(edge.node, edge.weight);
            });
        }
    }

    dijkstra(start, end) {
        let nodes = new PriorityQueue();
        let distances = {};
        let previous = {};
        let shortestPath = [];
        let currentVertex;

        for (const vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity)
            }

            previous[vertex] = null;
        }

        while (nodes.values.length) {
            currentVertex = nodes.dequeue().value;

            if (currentVertex === end) {
                while (previous[currentVertex]) {
                    shortestPath.push(currentVertex);
                    currentVertex = previous[currentVertex];
                }
                break;
            }

            if (currentVertex || distances[currentVertex] !== Infinity) {
                for (let neighbor in this.adjacencyList[currentVertex]) {
                    let neighborNode = this.adjacencyList[currentVertex][neighbor];

                    let potentialShortest = distances[currentVertex] + neighborNode.weight;

                    if (potentialShortest < distances[neighborNode.node]) {
                        distances[neighborNode.node] = potentialShortest;
                        previous[neighborNode.node] = currentVertex;
                        nodes.enqueue(neighborNode.node, potentialShortest);
                    }
                }
            }
        }
        return shortestPath.concat(currentVertex).reverse();
    }
}

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (newNode.priority < this.values[parentIndex]?.priority) {
            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = newNode;
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }

        return index;
    }

    dequeue() {
        let min = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();
        this.sinkDown();
        return min;
    }

    sinkDown() {
        let index = 0;
        let parent = this.values[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild;
            let rightChild;
            let swap = null;

            if (leftChildIndex < this.values.length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild.priority < parent.priority) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < this.values.length) {
                rightChild = this.values[rightChildIndex];
                if (
                    (rightChild.priority < parent.priority && swap === null) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) {
                break;
            }

            this.values[index] = this.values[swap];
            this.values[swap] = parent;
            index = swap;
        }
    }
}

// class PriorityQueue {
//     constructor() {
//         this.values = [];
//     }

//     enqueue(value, priority) {
//         this.values.push({ value, priority });
//         this.sort();
//     }

//     dequeue() {
//         return this.values.shift();
//     }

//     sort() {
//         this.values.sort((a, b) => a.priority - b.priority);
//     }
// }

let graph = new WeightedGraph();
graph.addVertex("Abidjan");
graph.addVertex("Bordeaux");
graph.addVertex("Coventry");
graph.addVertex("Denver");
graph.addVertex("Eindhoven");
graph.addVertex("Fukuoka");

graph.addEdge("Abidjan", "Bordeaux", 4000);
graph.addEdge("Abidjan", "Coventry", 2000);
graph.addEdge("Bordeaux", "Eindhoven", 3000);
graph.addEdge("Coventry", "Denver", 2000);
graph.addEdge("Coventry", "Fukuoka", 4000);
graph.addEdge("Denver", "Eindhoven", 3000);
graph.addEdge("Denver", "Fukuoka", 1000);
graph.addEdge("Eindhoven", "Fukuoka", 1000);

console.log(graph.dijkstra("Abidjan", "Fukuoka"));
