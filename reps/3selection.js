/**
 *
 * @param {number[]} arr
 */
function selectionSort(arr) {
  let i, j, smallest;
  for (i = 0; i < arr.length; i++) 
  {
    smallest = i;

    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    [arr[smallest], arr[i]] = [arr[i], arr[smallest]];

  }


  return arr
}

console.log(selectionSort([2,7,6,5,4,6,13,1,-11,23,-2]));
