class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  insert(value) {
    const newNode = new BinaryTree(value);
    if (!this.value) {
      this.value = value;
    } else {
      if (value <= this.value) {
      if (!this.left) {
          this.left = newNode;
        } else {
          this.left.insert(value);
        }
      } else {
        if (!this.right) {
          this.right = newNode;
        } else {
          this.right.insert(value);
        }
      }
    }  
    return newNode;
  }
}
