//1 define a linked list
//2 pop element from linked list
//3 reverse a linked list
//4 insert element in the middle


//linked list without length, the length prop is a getter

class ListNode {
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class LinkedList { 
    constructor(){
        this.head=null;
        this.tail=null;
    }
    get length(){
        let length=0;
        if(this.head==null){
            return 0
        }
        let node= this.head;
        while(node){
           length=length+1;
           node=node.next;
        }
        return length;
    }

    push(val){
        let newNode = new ListNode(val);
        if(this.length===0){
            this.head=newNode;
            this.tail=newNode;
            return this
        }
        let lastnode = this.tail;
        lastnode.next=newNode;
        this.tail=newNode;
        return this
    }
    pop(){
        let listLength=this.length
       if(listLength<1)return
       if(listLength===1){
           this.head=null
           this.tail=null
           return
        }
        let current = this.head;
        let temp;
        while(current.next){
            temp=current;
            current=current.next;

        }
        temp.next=null;
        this.tail=temp;

    }

    get(index){
      if(index<0 || index>=this.length){
          return
      }
      let node = this.head;
      let i=0
      while(i<index){
        node=node.next;
        i++;
      }
      return node;

    }


    reverse(){
       if(this.length<2){
           return this
       }
       let current = this.head;
       let aftercurrent=current.next;
       while(aftercurrent){
           let temp=aftercurrent.next;
           
           aftercurrent.next =current;
           current=aftercurrent;
           aftercurrent = temp;
       }
       [this.head,this.tail] = [this.tail,this.head];
       this.tail.next=null;
       return this
    }

    print(){
        let node = this.head;
        while(node){
            console.log(node.val)
            node=node.next;
        }
    }
}

const list = new LinkedList();
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push('potato')
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.print();
console.log(list.length);
list.reverse().print();
// console.log(list.get(-1));