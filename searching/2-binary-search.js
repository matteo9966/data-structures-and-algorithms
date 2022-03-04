/**
 * @description binarySearch accepts a sorted array and a value, if the value exists it returns its index in the array
 *  if no value, it returns -1
 * @param {Array} arr
 * @param {number} value
 */
function binarySearch(arr, value) {
  let p = 0,
    j = arr.length - 1;
  function binarySearchHelper(arr) {
    if(j<p){
        return -1
    }
    if (p === j) {
      if (arr[p] === value) {
        return p;
      }
      return -1;
    }
    const intermediateIndex = Math.floor((p + j) / 2);
    if (arr[intermediateIndex] === value) {
      return intermediateIndex;
    }
    if (arr[intermediateIndex] < value) {
      p = intermediateIndex + 1;
      return binarySearchHelper(arr);
    }
    if (arr[intermediateIndex] > value) {
      j = intermediateIndex - 1;
      return binarySearchHelper(arr);
    }
  }

  return binarySearchHelper(arr);
}

console.log(binarySearch([],3))