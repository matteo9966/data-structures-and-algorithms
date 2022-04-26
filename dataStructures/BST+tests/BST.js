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

  remove(value) {
    if (!value) return;
    if (this.root === null) return null;

    const findLargest = (node) => {
      let largest = node;
      while (largest.right) {
        largest = largest.right;
      }
      return largest.value;
    };

    const removeHelper = (value, node) => {
      if (!node) return null;

      if (value < node.value) {
       node.left = removeHelper(value, node.left);
      }
      else if (value > node.value) {
        node.right = removeHelper(value, node.right);
      }
       else  {
         if(!node.right && !node.left){
           return null
         }
         else if(!node.left){
           return node.right
         }
         else if(!node.right){
           return node.left
         }
         else {
           const largestOnLeft = findLargest(node.left);
           node.left = removeHelper(largestOnLeft,node.left);
           node.value = largestOnLeft;
           return node
         }
     
      }
       
      return node;

    };
    
    this.root = removeHelper(value,this.root)
    return this 

  }

  /**
   * BreadthFirstSearch 
   */
  BFS(){
    const queue = [];
    const visited = [];
    if(!this.root) return [];

    queue.push(this.root)
    
    while(queue.length>0){
      let visitedNode = queue.shift();
      visitedNode.left && queue.push(visitedNode.left);
      visitedNode.right && queue.push(visitedNode.right);
      visited.push(visitedNode.value);
    }
    
    return visited;



  }

  DFSPreOrder(){
    
  }

};

module.exports.BST= BST;
const bst = new BST();
bst.insert(50);
bst.insert(20);
bst.insert(60);
bst.insert(55);
bst.insert(10);
bst.insert(100);
bst.remove(10);

console.log(bst);