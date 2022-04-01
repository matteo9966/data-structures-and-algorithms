class ListNode {
    constructor(val){
        this.val = val;
        this.next= null;
    }
}

class LinkedList {
   constructor(){
     this.head = null;
     this.length = 0;
     this.tail = null;
   }

   push(val){
       if(this.head!=null){
           this.tail.next = new ListNode(val)
           this.tail = this.tail.next;
       }
       if(this.head==null){
           this.head=new ListNode(val)
           this.tail= this.head;
        }
        this.length=this.length+1;
   }

   pop(){
       if(this.length===0){
           this.head=null;
           this.tail=null;
           return
       }
       let current = this.head;
       let temp = current;
       let len=0;

       while(current){
           if(current.next){
               temp=current;
               len++;

           }
          current=current.next;
        }
     
       this.tail=temp;
       temp.next=null;
       this.length=len;
       return temp;
   }
   shift(){
       if(this.length===0)return
       let temp = this.head
       this.head=this.head.next;
       this.length=this.length-1;
       return temp;
   }

}


const list = new LinkedList();
list.push("hello")
list.push("my")
list.push("name")
list.push("is")
list.push("matteo")
list.pop()
list.shift();

console.log(list.length);
// list.push("dog")
// list.push("is")
// list.push("pablo")

let i = 0
let cur = list.head;
while(i<list.length){
    
    console.log(cur.val);
    cur= cur.next;
    i++;
}