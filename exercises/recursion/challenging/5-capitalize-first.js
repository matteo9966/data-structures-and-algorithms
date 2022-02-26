// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
/**
 * @description capitalizeFirst capitalizes first letter of each word
 * @param {Array} arr
 */
function capitalizeFirst(arr) {
  let i = 0;
  /**
   * @param {[String]} arr
   * @param {Number} i
   */
  function capitalizeFirstHelper(arr) {
    if (i == arr.length) {
      return;
    }
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    i++;
    capitalizeFirstHelper(arr);
  }
  capitalizeFirstHelper(arr);
  return arr;
}

console.log(capitalizeFirst(['car','taco','banana']));