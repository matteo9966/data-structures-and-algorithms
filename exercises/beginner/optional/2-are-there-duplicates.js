function areThereDuplicates(...args) {
    //args è un array,
    const map={};
    if(args.length<2){
        return false
    }
    args.forEach(el=>{
        if(!map[el]){
            map[el]=0;
        }
        map[el]+=1;
    })
   
    for(const [key,value] of Object.entries(map) ){
        if (value!=1){
            return true
        }
    }
     return false;
  }

  console.log(areThereDuplicates('a','b','c',"d",'1',2,4))
  console.log(areThereDuplicates(2,4,2))
  console.log(areThereDuplicates(2,4,2,2,3,4,5))
  console.log(areThereDuplicates(1,2,3,4,5))
  console.log(areThereDuplicates(1,2))
  console.log(areThereDuplicates(1))
  console.log(areThereDuplicates())


  //ANOTHER GREAT SOLUTION:
  //create a set from the array, all duplicates are removed, when removed see if the set has the same size of the args array.
  function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }