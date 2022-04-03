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
        return this
   }

//    pop(){
//        if(this.length===0){
//            this.head=null;
//            this.tail=null;
//            return
//        }
//        let current = this.head;
//        let temp = current;
//        let len=0;

//        while(current){
//            if(current.next){
//                temp=current;
//                len++;

//            }
//           current=current.next;
//         }
     
//        this.tail=temp;
//        temp.next=null;
//        this.length=len;
//        return temp;
//    }

   pop(){
      if(this.length===0){
          this.head=null;
          this.tail=null;
          return
      }
      let temp= this.head;
      let current = this.head;
      while(current.next){
          temp=current;
          current=current.next;
      }
    

      temp.next = null;
      this.length=this.length-1;
      return current;
   }

   shift(){
       if(this.length===0)return
       let temp = this.head
       this.head=this.head.next;
       this.length=this.length-1;
       return temp;
   }
   unshift(val){
       const newLink = new ListNode(val);
       
        if(this.length===0){
           this.head = newLink;
           this.tail = this.head;
            
        }else{
           newLink.next=this.head;
           this.head=newLink;
        }

        this.length=this.length+1;
        return this
   }
    /**
     * 
     * @param {number} index 
     * @description get node at index of a linked list
     * @returns {ListNode|undefined}
      */
   get(index){
       if(index<0 || index>this.length){
           return 
       }
       let cout=0;
       let node = this.head;
       while(cout<index){
           cout++
           node= node.next;
       }
       return node
   }
  
   /**
    * 
    * @param {number} index 
    * @param {any} val 
    * @description set value at index 
    */
   set(index,val){
     const node = this.get(index)
     if(!node) return false
     node.val=val
     return true
   }
  /**
    * 
    * @param {number} index 
    * @param {any} val 
    * @description insert value at index 
    */
   insert(index,val){
     if(index<0 || index>this.length){
         return false
     }
     if(index===0){
        this.unshift(val)
        return true
     }
     if(index===this.length){
       this.push(val)
       return true
     }
     const node = this.get(index-1);
     const newLink= new ListNode(val);
     newLink.next=node.next;
     node.next=newLink;
     return true
   }

   /**
    * 
    * @param {number} index 
    */
   remove(index){
       if(index>=this.length || index<0){
           return
       }
       if(index===0){
          return this.shift()
       }
       if(index===this.length-1){
          return this.pop()
       }
        
       let prevNode = this.get(index-1)
       let nextNode=prevNode.next;
       prevNode.next=nextNode.next;
       this.length=this.length-1
       return nextNode
    }

    reverse(){
        if(this.length<2){
            return this
        }
        let temp,nextNode,CurrentNode;
        CurrentNode=this.head;
        nextNode=CurrentNode.next;
        while(nextNode!=null){
            temp=nextNode.next;
            nextNode.next=CurrentNode;
            CurrentNode=nextNode;
            nextNode=temp;
        }
        let tempHead = this.head;
        this.head=this.tail
        this.tail=tempHead;
        this.tail.next=null;
        return this;
    }

}


const list = new LinkedList();
// list.push("my")
// list.push("name")
// list.push("is")
// list.push("matteo")
// list.set(2,"DOGO");
// list.pop()
// list.pop();
// list.shift();
// list.unshift("Potatoto")
// list.unshift("IS")
// list.unshift("Matteo")
list.push(1) //0
list.push(2) //1
list.push(3) //2
list.push(4) //3
list.push(5) //4
list.push(6) //5
// list.remove(3);
list.reverse();
list.reverse();
// list.reverse();
// list.reverse();

// console.log(list.length);
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

// let val = list.get(2).val;
// console.log(val);