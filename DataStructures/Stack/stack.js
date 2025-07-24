class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            newNode.next = temp;
        }

        return this.size++;
    }

    pop() {
        if (this.size === 0) {
            return null;
        }

        let temp = this.first;

        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = temp.next;
        }

        this.size--;
        return temp.value;
    }
} 

let stack = new Stack;
stack.push(1);
stack.push(2);
console.log(stack);
console.log(stack.first);
console.log(stack.last);
console.log(stack.pop());
console.log(stack);
console.log(stack.first);
console.log(stack.last);
