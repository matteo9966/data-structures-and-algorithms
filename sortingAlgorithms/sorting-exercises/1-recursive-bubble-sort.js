/**
 * 
 * @param {number[]} arr 
 */
function iterativeBubbleSort(arr){
    let n = arr.length,i,j;
    for(i=0; i<n ; i++){
        let swapped = false
        for(j=0; j<n-i-1;j++){
            if(arr[j]>=arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                swapped = true;
            }
        }
       if(!swapped){
           break
       }
       
    }
 return arr 


}

// console.log(iterativeBubbleSort([5,6,7,4,3,6,1,8,1,23]));

function recursiveBubbleSort(arr){
    if(arr.length===1){
        return arr
    }
 
    for(let i = 0 ; i < arr.length-1; i ++ ){
        if(arr[i] <= arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]]  
            swapped = true;  
        }
    }

    let smallest = arr[arr.length-1];
    arr.pop();
    return [smallest].concat(recursiveBubbleSort(arr))
    
  
}

console.log(recursiveBubbleSort([3,4,6,5,44,34,2,1]));
//sort smallest on top
//[3 5 3 1 7 2]
//[5 3 3 7 2 1]
//[1].bubble([5 3 3 7 2 ])
//[1].([2].bubble([5 3 7 3 ]))
//[1].([2].([3].bubble([5 3 7])))) ..... 
