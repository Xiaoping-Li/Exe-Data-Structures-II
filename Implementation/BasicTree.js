class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insert(value) {
    if (!this.value) {
      this.value = value;
    } else {
      const child = new Tree(value);
      this.children.push(child);
    }
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }
    if (this.children) {
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        if (child.value === value) return true;
        if (child.contains(value)) return true;
      }
    }
    return false;
  }
}

const tree = new Tree();
tree.insert(3);
tree.insert(5);
tree.insert(7);
tree.children[0].insert(9);
tree.contains(3);
tree.contains(10);
