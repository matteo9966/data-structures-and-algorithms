/**+
 * @description given an array, create a subarray that lists all odd nmbers 
 * @param {Array} arr the array
 * @returns {Array} the array of odds in arr
 */
function listAllOdds(arr) {
  const oddsArray = [];
  if (arr.length === 0) {
    return arr;
  }
  const sliced = arr.slice(1);
  if (arr[0] % 2 !== 0) {
    oddsArray.push(arr[0]);
  }
  return oddsArray.concat(listAllOdds(sliced));
}

/* 
  example:                                                                                       =>        [1,3,5]
  f([1,2,3,4,5,6])                                                                           =>returns[1,3,5]
    [1].concat(f[2,3,4,5,6])                                                             =>returns[1,3,5]
                 [].concat(f([3,4,5,6]))                                             =>returns[3,5]
                             [3].concat(f(4,5,6))                                =>returns [3,5]  
                                          [].concat(f([5,6]))                 =>returns [5]
                                                    [5].concat(f(6))       =>returns [5]
                                                                 []     =>returns []
  



*/

const arr = [1,2,3,4,5,6,7,8,9,10,11]
const arr1 = [1]
const arr2 = [2]
const arr3 = []
console.log(listAllOdds(arr));
console.log(listAllOdds(arr1));
console.log(listAllOdds(arr2));
console.log(listAllOdds(arr3));