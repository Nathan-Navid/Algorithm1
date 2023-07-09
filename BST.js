class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(data, thisNode = this.root) {
        if (this.root == null) {
            let node = new Node(data);
            this.root = node;
            return
        }
        if (data < thisNode.data) {
            if (thisNode.left == null) {
                let node = new Node(data)
                thisNode.left = node
                return
            }
            else {
                this.insert(data, thisNode.left)
            }
        }
        else if (data > thisNode.data) {
            if (thisNode.right == null) {
                let node = new Node(data)
                thisNode.right = node
                return
            }
            else {
                this.insert(data, thisNode.right)
            }
        }

    }
}

var bst1 = new BST()
bst1.insert(13)
bst1.insert(11)
bst1.insert(15)
bst1.insert(12)
console.log(bst1)



// class Node {
//     constructor(data){
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST {
//     constructor(){
//         this.root = null;
//     }
//     insert(data){
//         let node = new Node(data);
//         if (this.root == null) {
//             this.root = node;
//         }
//         let thisNode = this.root;
//         let lastNode = null;
//         while (thisNode != null) {
//             if (data < thisNode.data) {
//                 lastNode = thisNode;
//                 thisNode = thisNode.left;
//             }
//             else if (data > thisNode.data) {
//                 lastNode = thisNode;
//                 thisNode = thisNode.right;
//             }
//             else {
//                 return;
//             }
//         }
//         if (data < lastNode.data) {
//             lastNode.left = node;
//         }
//         else if (data > lastNode.data) {
//             lastNode.right = node;
//         }
//     }
// }

// var bst1 = new BST()
// bst1.insert(13)
// bst1.insert(11)
// bst1.insert(15)
// bst1.insert(12)
// console.log(bst1)