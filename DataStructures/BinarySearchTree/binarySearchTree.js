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

    remove(value) {
        if (this.root === null) {
            return;
        }

        let removedNode = null;

        function findAndRemove(node) {
            if (value === node.value) {
                removedNode = new Node(node.value);
                if (node.left && node.right) {
                    let current = node.right;
                    while (current.left) {
                        current = current.left;
                    }

                    node.value = current.value;
                    current.value = value;
                    node.right = findAndRemove(node.right);
                } else if (node.left) {
                    return node.left;
                } else if (node.right) {
                    return node.right;
                } else {
                    return null;
                }
            } else if (value < node.value) {
                if (node.left) {
                    node.left = findAndRemove(node.left);
                }
            } else {
                if (node.right) {
                    node.right = findAndRemove(node.right);
                }
            }
            return node;
        }
        this.root = findAndRemove(this.root);
        return removedNode;
    }

    depthFirstSearchOrdered() {
        let result = [];

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }

            result.push(node.value);

            if (node.right) {
                traverse(node.right);
            }
        }

        if (this.root === null) {
            return null;
        }

        traverse(this.root);
        return result;
    }

    findSecondLargest() {
        let orderedNodes = this.depthFirstSearchOrdered();

        if (orderedNodes === null) {
            return undefined;
        }

        if (orderedNodes.length === 0) {
            return 0;
        }

        if (orderedNodes.length === 1) {
            return 0;
        }

        return orderedNodes[orderedNodes.length - 2];
    }

    isBalanced() {
        if (this.root && !this.root.left && !this.root.right) {
            return true;
        }

        let counter = 0;

        let child = this.root.left;
        if (this.root.left) {
            while (child.left || child.right) {
                if (child.left) {
                    child = child.left;
                } else if (child.right) {
                    child = child.right;
                }
                counter++;
            }
        }

        child = this.root.right;
        if (this.root.right) {
            while (child.left || child.right) {
                if (child.left) {
                    child = child.left;
                } else if (child.right) {
                    child = child.right;
                }
                counter--;
            }
        }

        if (counter < 0 || counter > 1) {
            return false;
        } else {
            return true;
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
