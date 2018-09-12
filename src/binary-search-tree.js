// https://msdn.microsoft.com/en-us/library/aa289150(v=vs.71).aspx
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */

/* ********Binary Search Tree is a node-based binary tree data structure which has the following properties:
## The left subtree of a node contains only nodes with keys lesser than or equal to the node's key
## The right subtree of a node contains only nodes with keys greater than the node's key
## The left and right subtree each must also be a binary search tree
(left_subtree(keys) <= node(key) <= right_subtree(keys))

Representation: 
BST is a collection of nodes arranged in a way where they maintain BST properties. Each node has a key and an 
associated value. While searching, the desired key is compared to the keys in BST and if found, the associated 
value is retrieved.
(https://www.tutorialspoint.com/data_structures_algorithms/binary_search_tree.htm)
 ******** */
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  // Wraps the input value in a new BinarySearchTree and
  // assigns it to either the left or right subtree,
  // depending on its value

  insert(value) {
    let swapCompleted = false;
    const newNode = new BinarySearchTree(value);
    let root = this;
 
    while (!swapCompleted) {
      if (root.value >= value) {
        if (!root.left) {
          root.left = newNode;
          swapCompleted = true;
        }
        root = root.left;
      } else {
        if (!root.right) {
          root.right = newNode;
          swapCompleted = true;
        }
        root = root.right;
      } 
    }
    return newNode;  
  }

  // Checks the binary search tree for the input target
  // Can be written recursively or iteratively

  // contains(target) {

  // }

  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process

  // depthFirstForEach(cb) {

  // }

  // Traverses the tree in a breadth-first manner, i.e. in layers, starting 
  // at the root node, going down to the root node's children, and iterating
  // through all those nodes first before moving on to the next layer of nodes
  // Applies the given callback to each tree node in the process
  // You'll need the queue-helper file for this. Or could you roll your own queue
  // again. Whatever floats your boat.

  // breadthFirstForEach(cb) {

  // }
}

module.exports = BinarySearchTree;
