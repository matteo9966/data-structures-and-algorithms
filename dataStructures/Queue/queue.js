//queue works almost the same as a singly linked list
/* 

a -> b -> c -> d -> e
H                   T

dequeue = shift of linked list
queue = push of linked list

*/

class ListNode {
    constructor(value){
        this.next = null;
        this.value= value;
    }
}

class Queue {
    constructor(){
      this.length=0;
      this.head=null;
      this.tail=null;
    }

    enqueue(value){
        const node= new ListNode(value);
        if(this.length==0){
           this.head=node;
           this.tail=node;
           this.length++;
           return this.length;
        }
         this.tail.next=node;
         this.tail = node;
         this.length++
         return this.length;
    }
    dequeue(){
        if(this.length==0){
           return
        }
        if(this.length==1){
            const temp = this.head;
            this.head=null;
            this.tail=null;
            this.length=0;
            temp.next=null;
            return temp;
        }
           const temp = this.head;
           this.head=this.head.next;
           this.length=this.length-1;
        //    temp.next=null;
           return temp.value;

    }

}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())