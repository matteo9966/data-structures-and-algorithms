//repetition of bubble sort

/**
 *
 * @param {number[]} arr
 */
function bubbleSort(arr) {
  let j = arr.length;
  let i = 0;

  while (j > 0) {
    for (i = 0; i < j - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    j = j - 1;
  }

  return arr
}
console.log(bubbleSort([]))
console.log(bubbleSort([3,2,1,-11]))
console.log(bubbleSort([1,2,9,8,2,111,2]))