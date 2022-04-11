class StackNode {
    constructor(value){
    this.next=null;
    this.value=value
    }

}


class Stack {
    constructor(){
        this.length=0;
        this.first=null;
        this.last=null;
    }
   
    push(value){
        const node= new StackNode(value)
        if(this.length==0){
            this.first=node;
            this.last=node;
            return ++this.length;
        }
        
        const temp = this.first;
        this.first=node;
        node.next=temp;
        return ++this.length;
    }
    pop(){
        if(this.length==0) return null
        if(this.length==1){
            const temp = this.first;
            this.first.next=null;
            this.first=null;
            this.last=null;
            this.length==0;
            return temp.value;
        }
        const temp = this.first;
        this.first=this.first.next;
        temp.next=null;
        this.length=this.length-1;
        return temp.value;
    }
  
    print(){
        
        let temp = this.first
        while(temp){
            console.log(temp.value)
            temp=temp.next;
        }
    }

}

const stack = new Stack();

stack.push('my')
stack.push('name')
stack.push('is')
stack.push('matteo');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log('/--/---/--/')
stack.print();

