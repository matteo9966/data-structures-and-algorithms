/**
 * 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 */
function merge(arr1,arr2){
    let i=0,j=0;
    let sorted=[];
    while(i<arr1.length && j<arr2.length){
      if(arr1[i]<=arr2[j]){
          sorted.push(arr1[i])
          i++
      }else{
          sorted.push(arr2[j])
          j++
      }

    }
    while(i<arr1.length){
        sorted.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        sorted.push(arr2[j])
        j++
    }
    return sorted;
}

/**
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function mergeSort(arr){
    if(arr.length==0){
        return []
    }

    if(arr.length==1){
      return arr
  }

  let size = arr.length;
  let half = Math.ceil(size/2);

  let left = arr.slice(0,half)
  let right = arr.slice(half,size)
  
  let arr1 = mergeSort(left);
  let arr2 = mergeSort(right);

  return merge(arr1,arr2);



  

}



let arr1=[5,1,7,2,3,2]
let arr2=[2,4,6,8,10,12]
console.log(mergeSort(arr1));