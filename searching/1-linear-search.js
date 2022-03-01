/**
 * @description a recursive version of linear search
 */

function linearSearch(arr,value){
    
    function linearSearchHelper(arr,result){
        
        if(arr.length==0){
            result = -1;
            return result
        }
        if(arr[0]===value){
            
            return result
        }
        result=result+1;
       return linearSearchHelper(arr.slice(1),result);

    }
    return linearSearchHelper(arr,0)
   

}

console.log(linearSearch([1,2,3,4,5,6,7],61));