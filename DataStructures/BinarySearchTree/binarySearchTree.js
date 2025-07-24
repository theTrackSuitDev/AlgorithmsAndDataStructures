class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (value > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else {
                return false;
            }
        }
    }

    find(value) {
        if (!this.root) {
            return false;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) {
                return true;
            }

            if (value < current.value) {
                if (current.left === null) {
                    return false;
                }

                current = current.left;
            }

            if (value > current.value) {
                if (current.right === null) {
                    return false;
                }

                current = current.right;
            }
        }
    }
}

let tree = new BinarySearchTree();
tree.insert(10);

console.log(tree.insert(10));

tree.insert(1);
tree.insert(11);

console.log(tree.root.left);
console.log(tree.root.right);

tree.insert(20);
console.log(tree.root.right);
console.log(tree.root.right.right);

console.log(tree.find(1));
console.log(tree.find(10));
console.log(tree.find(11));
console.log(tree.find(20));
console.log(tree.find(99));
