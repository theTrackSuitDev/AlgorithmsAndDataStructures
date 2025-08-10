class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        let index = this.values.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (value > this.values[parentIndex]) {
            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = value;
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }

        return index;
    }

    extractMax() {
        let max = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();
        this.sinkDown();
        return max;
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
                if (leftChild > parent) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < this.values.length) {
                rightChild = this.values[rightChildIndex];
                if (
                    (rightChild > parent && swap === null) || 
                    (swap !== null && rightChild > leftChild)
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

let maxHeap = new MaxBinaryHeap();
maxHeap.values = [41, 39, 33, 18, 27, 12];

console.log(maxHeap.insert(55));
maxHeap.extractMax();
maxHeap.extractMax();
maxHeap.extractMax();
maxHeap.extractMax();
maxHeap.extractMax();
maxHeap.extractMax();
maxHeap.extractMax();
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
