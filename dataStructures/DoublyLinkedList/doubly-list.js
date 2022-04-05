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
    shift(){
        if(this.length===0){
            return 
        }
        if(this.length==1){
           let temp = this.head;
            this.head=null;
           this.tail=null;
           this.length=0;
            return temp
        }
        let temp = this.head;
        this.head=this.head.next;
        this.head.prev= null;
        temp.next=null;
        this.length=this.length-1;
        return temp
    }
    unshift(val){
        const newNode = new ListNode(val);
        if(this.length==0){
            this.head=newNode;
            this.tail=newNode;
            return this;
        }
        this.head.prev= newNode;
        newNode.next = this.head;
        this.head=newNode;
        this.length=this.length+1;
        return this;
    }

    print(){
        let node = this.head;
        while(node){
            console.log(node.val);
            node=node.next;
        }

    }
    
    /**
     * 
     * @param {number} index 
     */
    get(index){
       if(index<0 || index>=this.length) return
       
       const middle = Math.round(this.length/2);
       if(index<=middle){
           let i = 0;
           let curr = this.head
           while(i<index){
            curr=curr.next;
            i++
           }
           return curr
       }else{
           let curr = this.tail;
           let i = this.length-1;
           while(i>index){
               i--
               curr = curr.prev;
           }
           return curr;
       }
       
    }
    set(index,val){
        let node = this.get(index)
        if(!node) return
        node.val=val;
        return node;
    }
}

const list = new DoublyLinkedList();
list.push("MI").push("CHIAMO").push("MATTEO")

// list.shift();
list.unshift('DIRE')
list.unshift('DEVO')
list.unshift('PIACERE')
console.log('-----')
list.set(15,"PATATA");
console.log({2:list.get(2)});
console.log({4:list.get(4)});


console.log(list.length)
list.print();