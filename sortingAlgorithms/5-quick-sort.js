/**
 * @description pivotHelper is a function that takes  an array and pivots the first element,
 * items in array < first element will be placed at his left , the others at its right
 * 
 * @param {number[]} arr 
 */
function pivotHelper(arr,start=0,end=arr.length){
  if(arr.length<1){
      return start
  }
  let P = start
  let pivotElement = arr[start]
  let i=start+ 1;
  
  while(i<end){
     if(arr[i]<=pivotElement ){
         swap(arr,i,P+1)
         P++;
     }
     i++
  }
swap(arr,start,P);
 return P;
}

function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j]=temp;
    return arr
}

/**
 * 
 * @param {number[]} arr 
 */
function quickSort(arr){

    function quickSortHelper(arr,start,end){
        if(start>=end){
            return 
        }
        let p1 = pivotHelper(arr,start,end);
        quickSortHelper(arr,start,p1);
        quickSortHelper(arr,p1+1,end);
    }

    quickSortHelper(arr,0,arr.length)
    return arr
}

let arr = [-1,2,3,4,5,-10,-1000,44,6,9,1,2,5,3]

console.log(quickSort(arr));