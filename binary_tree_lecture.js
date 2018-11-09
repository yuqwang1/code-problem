// Tree - is a graph (nodes and edges) with no cycles
// Binary - at most 2 children
// Search - at any node, all left children are < , all right are >=
//
// Balanced Binary Tree
// at any node, the left substree and right subtree heights differ by at most 1
// and the left subtree must be balaced and the right subtree must be balanced.
// javascript
class Node {
  constructor(val) {
  this.val = val;
  this.left = this.right = null;
  }
}

class BST {
  constructor(){
    this.root = null; // null or a node obj
    }


print(root = this.root) {
    if (!root) {
      // console.log(root.val);
      return;
    }
    this.print(root.left);
    console.log(root.val);
    this.print(root.right);
}

search(val, root = this.root) {
  if (!root) return false;
  if (root.val === val) return true;

  if (root.val > val) {
    return this.search(val, root.left);
  } else {
    return this.search(val, root.right);
  }

}

// How to delete any node from BST
// find the node
// keep swapping that node with it's greater child until it is a leaf
//chop off the leaf



insert(val, root = this.root) {
    // check if the tree is empty
    if (root === null) {
      this.root = new Node(val);
      return;
    }

    if (val < root.val) {

      // go left
      // if the left subtree exists
      if (root.left) {
        this.insert(val, root.left);
      } else {
        root.left = new Node(val);
      }
    } else {
      // go right
      if (root.right) {
        this.insert(val, root.right);
      } else {
        root.right = new Node(val);
      }
    }
  }
}

let tree = new BST();
tree.insert(10);
tree.insert(5);
tree.print();
console.log(tree.search(5));
