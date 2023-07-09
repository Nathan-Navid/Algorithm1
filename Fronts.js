class StringManipulator {
    static removeBlanks(str) {
        return str.replace(/\s/g, "");
    }

    static getDigits(str) {
        return str.replace(/\D/g, "");
    }

    static acronym(str) {
        const words = str.trim().split(" ");
        const acronym = words.map((word) => word[0].toUpperCase()).join("");
        return acronym;
    }

    static countNonSpaces(str) {
        let count = 0;

        for (let i = 0; i < str.length; i++) {
            if (str[i] !== " ") {
                count++;
            }
        }

        return count;
    }

    static removeShorterStrings(arr, value) {
        return arr.filter((str) => str.length >= value);
    }
}

console.log(StringManipulator.removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(StringManipulator.removeBlanks("I can not BELIEVE it's not BUTTER"));

console.log(StringManipulator.getDigits("abc8c0d1ngd0j0!8"));
console.log(StringManipulator.getDigits("0s1a3y5w7h9a2t4?6!8?0"));

console.log(StringManipulator.acronym(" there's no free lunch - gotta pay yer way. "));
console.log(StringManipulator.acronym("Live from New York, it's Saturday Night!"));

console.log(StringManipulator.countNonSpaces("Honey pie, you are driving me crazy"));
console.log(StringManipulator.countNonSpaces("Hello world !"));

console.log(
    StringManipulator.removeShorterStrings(["Good morning", "sunshine", "the", "Earth", "says", "hello"], 4)
);
console.log(StringManipulator.removeShorterStrings(["There", "is", "a", "bug", "in", "the", "system"], 3));
// ------------------------------------------------------------------------
// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

// Examples:

// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

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
}

const SLL1 = new SinglyLinkedList();
console.log(SLL1.addFront(18));
console.log(SLL1.addFront(5));
console.log(SLL1.addFront(73));
// ------------------------------------------------------------------------
// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.
// Examples:

// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }

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
}

const SLL2 = new SinglyLinkedList();
SLL2.addFront(18);
SLL2.addFront(5);
console.log(SLL2.removeFront());
console.log(SLL2.removeFront());

// ------------------------------------------------------------------------
// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
// Examples:

// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null
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

const SLL3 = new SinglyLinkedList();
SLL3.addFront(18);
console.log(SLL3.front());
SLL3.removeFront();
console.log(SLL3.front());
