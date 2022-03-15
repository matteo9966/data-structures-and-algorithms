/**
 * @description mark first element as sorted

for each unsorted element X

  'extract' the element X

  for j = lastSortedIndex down to 0

    if current element j > X

      move sorted element to the right by 1

    break loop and insert X here
  @param {Array} arr
    */

function insertionSort(arr){

    for(let i = 1 ; i<arr.length;i++){
       const unsortedEl=arr[i];
         for(let j=i-1;j>=0;j--){
             if(arr[j]<=unsortedEl){
            //    [arr[i],arr[j+1]]=[arr[j+1],arr[i]] //scambia i due elementi dell'array
               break
             }
             if(arr[j]>unsortedEl){
                 arr[j+1]=arr[j]
                 arr[j]=unsortedEl;
                 
             }
         }
    }
    return arr
}

console.log(insertionSort([9,8,7,6,5,4,3,2,1,0]));