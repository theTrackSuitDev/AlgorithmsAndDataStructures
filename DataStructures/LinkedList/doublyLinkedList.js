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
            console.log(
                `${current.value}, Next: ${
                    current.next ? current.next.value : "Null"
                }, Previous: ${current.prev ? current.prev.value : "Null"}`
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        let last = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        this.tail = last.prev;
        this.tail.next = null;
        this.length--;

        last.prev = null;
        last.next = null;
        return last.value;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        let oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return oldHead;
        }

        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.prev = null;
        oldHead.next = null;

        this.length--;
        return oldHead.value;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
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

        if (index <= this.length / 2) {
            let counter = 0;
            let current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }

            return current.value;
        } else {
            let counter = this.length - 1;
            let current = this.tail;
            while (counter !== index) {
                current = current.prev;
                counter--;
            }

            return current.value;
        }
    }

    getNode(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        if (index <= this.length / 2) {
            let counter = 0;
            let current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }

            return current;
        } else {
            let counter = this.length - 1;
            let current = this.tail;
            while (counter !== index) {
                current = current.prev;
                counter--;
            }

            return current;
        }
    }

    set(index, value) {
        let found = this.getNode(index);

        if (found) {
            found.value = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return null;
        }

        if (index === 0) {
            this.unshift(value);
            return true;
        }

        if (index === this.length) {
            this.push(value);
            return true;
        }

        let newNode = new Node(value);
        let found = this.getNode(index - 1);
        newNode.prev = found;
        newNode.next = found.next;
        found.next.prev = newNode;
        found.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        let found = this.getNode(index);
        let previousNode = found.prev;
        let nextNode = found.next;
        previousNode.next = nextNode;
        nextNode.prev = previousNode;
        found.prev = null;
        found.next = null;
        this.length--;
        return found;
    }

    reverse() {
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        let next = null;
        let previous = null;

        for (let i = 0; i < this.length; i++) {
            next = currentNode.next;
            currentNode.next = previous;
            currentNode.prev = next;
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
list.push(4);
list.push(5);
list.log();
console.log(list.pop());
list.log();
console.log(list.shift());
list.log();
list.unshift(1);
list.log();
console.log(list.get(3));
console.log(list.getNode(3));
list.set(2, 33);
list.log();
list.insert(3, 44);
list.log();

list.remove(3);
list.log();

list.reverse()
list.log();
