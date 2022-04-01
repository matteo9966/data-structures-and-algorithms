/**
 *
 * @param {number[]} arr
 */
function insertionSort(arr) {
    let i , j;

    for(i = 1 ; i< arr.length; i++){
         let unsorted = arr[i];
         j=i-1;
         while(arr[j]>=unsorted){
            arr[j+1]=arr[j]
            j--;
         }
         arr[j+1]=unsorted;
    }

return arr
}


console.log(insertionSort([2,1,3,4,5,11,-12]));