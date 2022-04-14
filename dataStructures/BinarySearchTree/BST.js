class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    /**
     *
     * @param {BSTNode} node
     */
    const insertHelper = (node) => {
      if (value == node.value) {
        return node;
      }
      if (value >= node.value) {
        if (node.right) {
          return insertHelper(node.right);
        } else {
          node.right = new BSTNode(value);
          return node.right;
        }
      }
      if (value < node.value) {
        if (node.left) {
          return insertHelper(node.left);
        } else {
          node.left = new BSTNode(value);
          return node.left;
        }
      }
    };

    if (!value) return;

    if (this.root == null) {
      this.root = new BSTNode(value);
      return this.root;
    }

    let current = this.root;
    return insertHelper(current);
  }

  insertIterative(value) {
    if (!value) return;
    if (this.root == null) {
      this.root = new BSTNode(value);
      return this.root;
    }
    let current = this.root;
    while (current) {
      if (value == current.value) {
        return;
      }
      if (current.value < value) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new BSTNode(value);
          return current.right;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new BSTNode(value);
          return current.left;
        }
      }
    }
  }

  find(value) {
    const findHelper = (node) => {
      if (node == null) return;
      if (node.value == value) {
        return node;
      }
      if (value < node.value) {
        if (node.left) {
          return findHelper(node.left);
        } else {
          return;
        }
      } else {
        if (node.right) {
          return findHelper(node.right);
        } else {
          return;
        }
      }
    };

    if (!value) return;
    if (this.root == null) return;

    return findHelper(this.root);
  }

  remove(value){
    // non devo cancellare devo solo cambiare il valore con quello più grande dal lato sinistro se il nodo ha 2 figli!
  
     if(!value) return
     if(!this.root) return;
     let current = this.root;
     while(current){
       if(value ===current.value){
       }

       if(value<current.value){
         if(current.left){
           if(current.left.value===value) return current.left
           current=current.left;
         }else{
           return 
         }
           
       }
        else if(value>current.value){
        if(current.right){
          if(current.right.value===value) return current.right;
          current=current.right;

        }else{
          return 
        }
      }
     }  


  }
}

const bst = new BST();
console.log(bst.insertIterative(5));
console.log(bst.insertIterative(2));
console.log(bst.insertIterative(7));
console.log(bst.insertIterative(9));
console.log(bst.insertIterative(1));
console.log(">>>>><<<<<<$$FIND$$>>>>>>>><<<<<")
console.log(bst.find(6))


// bst.insert(5)
// bst.insert(7)
// bst.insert(4)
// bst.insert(2)
// bst.insert(1)
// bst.insert(19)
// console.log(bst);
