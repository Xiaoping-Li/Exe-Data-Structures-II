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
