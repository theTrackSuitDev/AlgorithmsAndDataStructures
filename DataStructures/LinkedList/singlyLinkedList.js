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

        let last = this.tail;
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }

        current.next = null;
        this.tail = current;
        this.length--;
        return last.value;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        let first = this.head;
        this.head = first.next;
        first.next = null;
        this.length--;
        return first.value;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current.value;
    }

    getNode(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, value) {
        if (index < 0 || index >= this.length) {
            return false;
        }

        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }

        current.value = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            this.unshift(value);
            return true;
        }

        if (index === this.length) {
            this.push(value);
            return true;
        }

        let counter = 0;
        let current = this.head;
        while (counter !== index - 1) {
            current = current.next;
            counter++;
        }

        let newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return false;
        }

        if (index === 0) {
            return this.shift(index);
        }

        if (index === this.length - 1) {
            return this.pop(index);
        }

        let counter = 0;
        let current = this.head;
        while (counter !== index - 1) {
            current = current.next;
            counter++;
        }

        let removed = current.next;
        current.next = current.next.next;
        removed.next = null;
        this.length--;
        return removed.value;
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

    rotate(num) {
        if (this.length === 1) {
            return this;
        }

        let endIndex;
        if (num < 0) {
            endIndex = this.length + num;
        } else {
            endIndex = num % this.length;
        }

        let newHead = this.getNode(endIndex);
        let newTail = this.getNode(endIndex - 1);
        if (newHead === this.head) {
            return this;
        }

        newTail.next = null;
        this.tail.next = this.head;
        this.head = newHead;
        this.tail = newTail;
        return this;
    }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.log();
console.log("Popped:", list.pop());
list.log();
console.log("Shifted:", list.shift());
list.log();
list.unshift(1);
list.log();
console.log(list.get(2));
list.set(2, 33);
console.log(list.get(2));
list.insert(2, 3);
console.log(list.get(2));
list.log();
console.log(list.remove(3));
list.log();
list.reverse();
list.log();
list.reverse();
list.log();
list.rotate(2);
list.log();
