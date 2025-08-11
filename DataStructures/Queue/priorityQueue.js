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

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(1, 1);
priorityQueue.enqueue(2, 0);
priorityQueue.enqueue(3, 10);
priorityQueue.enqueue(4, 20);
priorityQueue.enqueue(5, 2);
console.log(priorityQueue.values[0]);
console.log(priorityQueue.values[1]);
console.log(priorityQueue.values[2]);
console.log(priorityQueue.values[3]);
console.log(priorityQueue.values[4]);
console.log("Dequeuing:");
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
