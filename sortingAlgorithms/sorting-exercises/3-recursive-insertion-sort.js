
/**
 *
 * @param {number[]} arr
 */
function iterativeInsertionSort(arr) {
  const length = arr.length;
  console.log(length);

  for (let i = 1; i < length; i++) {
    let el = arr[i];
    let j = i - 1;
    while (j >= 0 && el < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = el;
  }
  return arr;
}

// console.log(iterativeInsertionSort([3, 2, 1, 5, -2, 33, 1]));

/**
 *
 * @param {number[]} arr
 */
function recursiveInsertionSort(arr) {
    function recursiveHelper(i){
        if(i>=arr.length) return arr
        let el = arr[i];
        let j = i-1;
        while(j>=0 && el< arr[j]){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1]= el
       return  recursiveHelper(i+1);
    }
    return recursiveHelper(1)
}

console.log(recursiveInsertionSort([3, 2, 1, 5, -2, 33, 1]));