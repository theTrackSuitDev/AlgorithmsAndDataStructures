class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    log() {
        console.log(`Length: ${this.length}`);

        let current = this.head;
        while (current) {
            console.log(
                `${current.value}, Next: ${
                    current.next ? current.next.value : "Null"
                }`
            );
            current = current.next;
        }
    }

    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        let last = this.tail
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }

        current.next = null;
        this.tail = current;
        this.length--;
        return last.value;
    }

    reverse() {
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        let next;
        let previous = null;

        for (let i = 0; i < this.length; i++) {
            next = currentNode.next;
            currentNode.next = previous;
            previous = currentNode;
            currentNode = next;
        }

        return this;
    }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.log();
console.log('Popped:', list.pop());
list.log()
list.reverse();
list.log();
