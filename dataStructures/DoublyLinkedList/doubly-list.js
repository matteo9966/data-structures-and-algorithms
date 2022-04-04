class ListNode {
  constructor(val){
    this.next=null;
    this.prev=null;
    this.val=val;     
  }

}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){
        let node = new ListNode(val);
        if(this.length===0){
            this.head=node;
            this.tail=node;
            this.length=this.length+1;
            return this
        }
        
        this.tail.next=node;
        node.prev=this.tail;
        this.tail = node;
        this.length=this.length+1;
        return this;
    }

    pop(){
        if(this.length===0){return}
        if(this.length===1){
            const temp = this.tail;
            this.head.next=null;
            this.head.prev=null;
            this.head=null;
            this.tail=null;
            return temp
        }
        const temp=this.tail;
        this.tail = this.tail.prev;
        this.tail.next=null;
        temp.prev=null;
        this.length=this.length-1;
        return temp;
    }

    print(){
        let node = this.head;
        while(node){
            console.log(node.val);
            node=node.next;
        }
    }
}

const list = new DoublyLinkedList();
list.push("potato").push("2 potatoes").push("three potatoes")
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log()
list.print();