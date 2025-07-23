class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    log() {
        console.log(`Length: ${this.length}`);

        let current = this.head;
        while (current) {
            console.log(`${current.value}, Next: ${current.next ? current.next.value : "Null"}, Previous: ${current.prev ? current.prev.value : "Null"}`);
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length ++;
        return this;
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

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.log();
// list.reverse()
// list.log();