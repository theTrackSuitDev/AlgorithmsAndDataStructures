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
}

let maxHeap = new MaxBinaryHeap();
maxHeap.values = [41,39,33,18,27,12];

console.log(maxHeap.insert(55));
