class HashTable {
    
    constructor(){
        this.length= 71
        this.table = Array.from({length:this.length},()=>{return []}) // un array di 71 array 
    }

    hash(value){ // returns an integer from 0 to length , same input gives same output value

        if(!value) return null
        if(typeof value !=='string') return

        let tot = 0;
      for(let char of value.split("")){
         tot+= char.charCodeAt(0) -96
         
        }
       const  index = tot % this.length;
        return index;
    }

    set(key,value){
        //hash key store value in hashed position
        const index = this.hash(key);
        this.table[index].push([key,value]);
    }
    get(key){
        const index = this.hash(key);
        const arrAtIndex = this.table[index];
        const element = arrAtIndex.find(el=>el[0]===key);
        if(!element) return null
        return element[1];
    }
    get keys() {
        let keys = []
      this.table.forEach(el=>{
          el.forEach(pair=>{keys.push(pair[0])})
      })
      return keys
    }
    get values() {
        let keys = []
      this.table.forEach(el=>{
          el.forEach(pair=>{keys.push(pair[1])})
      })
      return keys
    }
}

const hashTable = new HashTable();
 hashTable.set("cibo","pomilo");
 hashTable.set("rosetta","pomilo");
 hashTable.set("rabbia","pomilo");
console.log(hashTable.keys);