/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* *********A TREE is a widely used 'abstract data type (ADT)' that simulates a hierarchical tree structure, with a root 
value and 'subtrees' of children with a parent node, represented as a set of linked nodes.

A TREE data structure can be defined recursively (locally) as a collection of nodes (starting at a root node), where each
node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the 
constraints that no reference is duplicated, and none points to the root.

Alternatively, a TREE can be defined abstractly as a whole (globally) as an 'ordered tree', with a value assigned to each
node. A given node only contains the list of its children, but does not contain a referene to its parent.
(Wikipedia: https://en.wikipedia.org/wiki/Tree_(data_structure))
******** */

/* *************A TREE is a general structure of recursive nodes. There are many types of trees. Popular ones
are 'binary tree' and 'balanced tree'. A TRIE is a kind of tree, known by many names including prefix tree,
digital search tree, and retrieval tree. A TRIE represents a sequence in its structure. It is very different
in that it stores sequences of values rather than individual single values. EAch level of recursion says 'What is 
value of item | of the input list'. This is different to a binary tree which compares the single searched value 
to each node. (https://stackoverflow.com/questions/4737904/difference-between-tries-and-trees)
 *************** */

/* ************* A 'Binary Search Tree' is a dynamic version of what happens during 'Quicksort'. A 'Trie' is a dynamic
version of what happens during 'radix sort'. You look at the first bit or digit of a number (or first letter of a string)
to determine which subtree the value belongs in. You then repeat the procedure recursively using the next character or 
digit to determine which of the subtree's children it belongs in, and so on. 
(https://www.quora.com/How-do-tries-differ-from-binary-search-trees)
 *************** */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 

  addChild(value) {
    const child = new Tree(value);
    this.children.push(child);
  }

  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked

  contains(value) {
    if (this.value === value) return true;
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if (child.value === value) return true;
      if (child.children && child.contains(value)) return true;
    }
    return false;
  }

}

module.exports = Tree;
