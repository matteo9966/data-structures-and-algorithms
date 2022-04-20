const {BST} = require('../BinarySearchTree/BST');
class QNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    if (!value) return;
    const node = new QNode(value);

    if (this.length === 0) {
      this.tail = node;
      this.head = node;
      this.length = 1;
      return this.length;
    }
    this.tail.next = node;
    this.tail = node;
    this.length = this.length + 1;
    return this.length;
  }

  dequeue() {
    if (this.length === 0) return;
    if(this.head.next==null){
        const temp = this.head.value;
        this.head=null;
        this.tail=null;
        this.length=0;
        return temp;
    }

    const temp = this.head;
    this.head=this.head.next;
    temp.next=null;
    this.length=this.length-1;
    return temp.value;
  }
}

const bst = new BST();
bst.insert(20)
bst.insert(30)
bst.insert(40)
bst.insert(50)
bst.insert(10)
bst.insert(5)
bst.insert(12)

bst.breadthFirst = function  (){
 if(!this.root) return
 const queue = new Queue();
 queue.enqueue(this.root);

 /**
  * 
  * @param {Queue} queue 
  * @param {Array} values 
  * @returns 
  */
 const breadthFirstHelper = (queue,values=[])=>{
     if(queue.length==0) return values;
     const value = queue.dequeue();
     values.push(value.value);
     if(value.left){
         queue.enqueue(value.left)
     }
     if(value.right){
         queue.enqueue(value.right)
     }
     return breadthFirstHelper(queue,values);

 }
  return breadthFirstHelper(queue,[]);
}


console.log({bst:bst.breadthFirst.call(bst)})