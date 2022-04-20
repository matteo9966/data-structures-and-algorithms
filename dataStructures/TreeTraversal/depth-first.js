const { BST } = require("../BinarySearchTree/BST");
const bst = new BST();

bst.insert(20)
bst.insert(30)
bst.insert(40)
bst.insert(50)
bst.insert(10)
bst.insert(5)
bst.insert(12)

bst.depthFirstPreOrder = function () {
  const values = [];
  if (!this.root) return;

  const DFSHelper = (current) => {
    values.push(current.value);
    if (current.left) {
      DFSHelper(current.left);
    }
    if (current.right) {
      DFSHelper(current.right);
    }
  };
  DFSHelper(this.root);
  return values;
};

console.log(bst.depthFirstPreOrder());
