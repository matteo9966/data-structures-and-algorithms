/**
 * @description bubbleSort algorithm
 * @param {Array} arr
 */
function bubbleSort(arr){
   let i=0, j=arr.length-1;
   while(j>0){
       let swapped=false;
       while(i<j){
         if(arr[i]>arr[i+1]){
           swapped=true
            swap(arr,i);
         }
        i++
       }
       i=0;
       j--;
       if(!swapped){
           return arr
       }
   }
   return arr
}
function bubbleSort2(arr){
   let i=0, j=arr.length-1;
   while(j>0){
       let swapped=false;
       while(i<j){
         if(arr[i]>arr[i+1]){
           swapped=true
            swap(arr,i);
         }
        i++
       }
       i=0;
       j--;
     
   }
   return arr
}

function swap(arr,i){
    if(i<arr.length-1){
        const tmp = arr[i]
        arr[i]=arr[i+1]
        arr[i+1]=tmp
    }
}

console.time('no-optimize')
console.log(bubbleSort2([21,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20]))
console.timeEnd('no-optimize')

console.time('optimize')
console.log(bubbleSort([1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20]))
console.timeEnd('optimize')






// console.log(bubbleSort([4,4,6,5,5,1,1,2,3,4,5]))
// console.log(bubbleSort([4,15,1,1,2]))
// console.log(bubbleSort([4,15,122,13,1]))