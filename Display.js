class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    removeFront() {
        if (this.head === null) {
            return null;
        }

        const removedNode = this.head;
        this.head = this.head.next;
        return removedNode;
    }

    front() {
        if (this.head === null) {
            return null;
        }

        return this.head.data;
    }
}

const SLL1 = new SinglyLinkedList();
console.log(SLL1.addFront(18));
console.log(SLL1.addFront(5));
console.log(SLL1.addFront(73));
console.log(SLL1.removeFront());
console.log(SLL1.removeFront());

console.log(SLL1.front());
console.log(SLL1.removeFront());
console.log(SLL1.front());
// ------------------------------------------------------------------------
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    display() {
        let current = this.head;
        let values = [];

        while (current) {
            values.push(current.data);
            current = current.next;
        }

        return values.join(', ');
    }
}

const SLL2 = new SLL();
SLL2.addFront(76);
SLL2.addFront(2);
console.log(SLL2.display());

SLL2.addFront(11.41);
console.log(SLL2.display());
