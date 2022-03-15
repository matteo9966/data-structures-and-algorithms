/**
 * @description given two sorted arrays, return a sorted array
 * @param {Number[]} arr1 sorted array
 * @param {Number[]} arr2 sorted array
 * @returns {Number[]} sorted Array
 */
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];
  while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
      result.push(arr1[i])
      i++
    }else{
      result.push(arr2[j])
      j++
    }
  }
  while(i<arr1.length){
    result.push(arr1[i])
    i++
  }
  while(j<arr2.length){
    result.push(arr2[j])
    j++
  }
  return result
}



/**
 * @param {number[]} arr
 *
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const half = Math.ceil(arr.length / 2);

  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half);
  const sorted1 = mergeSort(firstHalf);
  const sorted2 = mergeSort(secondHalf);
  
  const sorted = merge(sorted1, sorted2);

  return sorted;
}

let unsorted= [5,3,2,1,9,8,7,6,6,6,5,4,3,2,1];

console.log(mergeSort(unsorted))