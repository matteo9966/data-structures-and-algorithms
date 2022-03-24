/**
 *
 * @param {number[]} arr
 */
 function recursiveSelectionSort(arr) {
    /**
     * @param {number} n
     * @returns
     */
    function recursiveHelper(n) {
      if (n === arr.length) {
        return arr;
      }
  
      let smallest = n,i;
  
      for (i = n+1; i < arr.length; i++) {
        if (arr[smallest] >= arr[i]) {
          smallest = i;
        }
      }

      [arr[n], arr[smallest]] = [arr[smallest], arr[n]];
      return recursiveHelper(n + 1);
    }
  
    return recursiveHelper(0);
  }
  
  console.log(recursiveSelectionSort([3,4,1,2,22,2,-1,3,-2,11]))