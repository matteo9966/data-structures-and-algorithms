module.exports = class BinaryHeap {
  //you can implement a binary heap using an array
  //this is a maxBinaryHeap, parent is always larger or equal then the children

  //parent index = n => children index = 2n+1 , 2n+2

  constructor() {
    this.values = [];
  }

  insert(value) {
    const bubbleUp = (index) => {
      const parent_index = Math.floor((index - 1) / 2);
      if (parent_index < 0) return;
      const parent_value = this.values[parent_index];
      if (parent_value >= value) return;
      [this.values[index], this.values[parent_index]] = [
        this.values[parent_index],
        this.values[index],
      ]; // faccio uno swap
      //ora il parent e il figlio si sono scambiati di ruolo,
      bubbleUp(parent_index); // faccio la stessa cosa a partire dal parent index
    };

    if (!value) return;
    const inserted_node_index = this.values.length;
    this.values.push(value);

    bubbleUp(inserted_node_index);
    return this;

    //il parent è minore,allora devo fare uno swap
    //una volta fatto lo swap controllo se il parent è piu piccolo, se è piu piccolo ripeto..
  }

  extractMax() {
    const swap =(index1,index2)=>{
       [this.values[index1],this.values[index2]]=[this.values[index2],this.values[index1]]
    }
    const sinkValue = (index) => {
      const child1index = 2 * index + 1;
      const child2index = 2 * index + 2;
      const child1 = this.values[child1index];
      const child2 = this.values[child2index];
      const parentValue =this.values[index];
      let swapped = false; // if i dont swap i return
      if(!child1 && !child2){
        return null
      }
      if(!child1){
         //scambio valore con figlio 2
         if(parentValue<child2){
             swapped=true
           swap(child2index,index);
         return  sinkValue(child2index);
         }
         
      }
      if(!child2){
          if(parentValue<child1){
              swapped=true
           swap(child1index,index);
         return  sinkValue(child1index)
          }
      }
      else{
          //ci sono tutti e due i figli,scelgo quello più grande e scambio i valori col genitore
          if(child1<child2){
              //child2 è più grande e faccio lo scambio
              if(parentValue<child2){
                  swapped=true;
                  swap(index,child2index);
             return     sinkValue(child2index)   
              }     
          }
          else{
              if(parentValue<child1){
                  swapped=true
                  swap(index,child1index);
                return  sinkValue(child1index);
              }
          }
      }
      if(!swapped) return
    };

    if (this.values.length === 0) return null;
    if (this.values.length === 1) {
      return this.values.pop();
    }
    //length>2
    let lastindex = this.values.length - 1;
    swap(0,lastindex)
    let largest = this.values.pop();
    sinkValue(0)
    return largest;
  }
};
