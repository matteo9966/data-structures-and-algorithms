/**
 * repetition of BST.js data structure
 *
 */

class Node {
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
    if (!value) return;

    if (this.root == null) {
      this.root = new Node(value);
      return this;
    }

    let node = this.root;

    while (node) {
      if(node.value===value) return this // possibilità di incrementare 
      if (value < node.value) {
        if (node.left) {
          node = node.left;
        } else {
          node.left = new Node(value);
          return this;
        }
      } else {
        if (node.right) {
          node = node.right;
        } else {
          node.right = new Node(value);
          return this;
        }
      }
    }
  }

  //find
   find(value){
       if(!value) return
       if(!this.root) return
       
       let node = this.root;
       while(node){
           if(node.value===value){
               return node
           }
           if(value<node.value){
               if(node.left){
                   node=node.left
               }else{
                   return
               }
           }else{
               if(node.right){
                   node=node.right
               }else{
                   return
               }
           }
           
       }
   }
  
}

let bst = new BST();
bst.insert(5)
bst.insert(5)
bst.insert(6)
bst.insert(7)
bst.insert(7)
bst.insert(8)
bst.insert(9)
bst.insert(10)

console.log(bst.find(11))