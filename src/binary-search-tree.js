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

/* ********
Tree Traversal: process of visiting each node in the tree exactly once in some order.
Visit: Reading / Processing data in a node 
******** */

/* ********
      1
  2       3
4   5
BFS: Breadth First Traversal (Or Level Order Traversal) : 1 2 3 4 5
DFS: Depth First Traversals
  ## Inorder Traversal (Left-Root-Right) : 4 2 5 1 3
  ## Preorder Traversal (Root-Left-Right) : 1 2 4 5 3
  ## Postorder Traversal (Left-Right-Root) : 4 5 2 3 1
(https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/)

In Breadth-First approach: for any node we visit all its children before visiting any of 
                           its grandchildren.
In Depth-First approach: if we would go to a child, we would complete the whole subtree 
                           of the child, before going to the next child;
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

  contains(target) {
    if (this.value === target) return true;
    if (this.value > target) {
      const leftNode = this.left;
      if (leftNode && leftNode.contains(target)) return true;
    } else {
      const rightNode = this.right;
      if (rightNode && rightNode.contains(target)) return true;
    }
    return false;
  }

  // Traverses the tree in a depth-first manner, i.e. from top to bottom
  // Applies the given callback to each tree node in the process

  depthFirstForEach(cb) {
    cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb);
    if (this.right) this.right.depthFirstForEach(cb);
  }

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
