class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

exports.BST = class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (!value) return;
    if (this.root == null) {
      this.root = new BSTNode(value);
      return this.root;
    }
    let current = this.root;
    while (current) {
      if (value === current.value) return current;
      if (value < current.value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new BSTNode(value);
          return current.left;
        }
      }
      if (value > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new BSTNode(value);
          return current.right;
        }
      }
    }
  }

  remove(value){
    if(!value) return
    if(this.root===null) return
    
  }
}
