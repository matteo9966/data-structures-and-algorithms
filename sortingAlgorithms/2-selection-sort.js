/**
 * @description 
 * repeat (numOfElements - 1) times

  set the first unsorted element as the minimum

  for each of the unsorted elements

    if element < currentMinimum

      set element as new minimum

  swap minimum with first unsorted position
  @param {Array} arr
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = arr[i];
    let smallestIndex = i;
    let swapped = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (minimum > arr[j]) {
        smallestIndex = j; //the index of the smallest becomes j
        minimum = arr[j]; //the minimum becomes arr[j]
        swapped = true;
      }
    }
    if (swapped) {
      swap(arr, i, smallestIndex);
    }
  }
  return arr;
}

function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

console.log(
  selectionSort([
    29, 10, 14, 37, 14, 1, 3, 4, 5, 6, 2, 44, 5, 12, 15, 166, 1, -1, 12,
  ])
);
