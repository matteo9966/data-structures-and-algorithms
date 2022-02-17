/**+
 * @description given an array, create a subarray that lists all odd nmbers using a helper function
 * @param {Array} arr the array
 * @returns {Array} the array of odds in arr
 */
function lisAllOdds(arr){
   const odds = [];
   
   function findOddsHelper(arr){
       if(arr.length===0){
           return
       }
       if(arr[0]%2!==0){
           odds.push(arr[0])
       }
       findOddsHelper(arr.slice(1));
   }

   findOddsHelper(arr);
   return odds


}
const arr = [1,2,3,4,5,6,7,8,9,10,11]
const arr1 = [1]
const arr2 = [2]
const arr3 = []
console.log(lisAllOdds(arr));
console.log(lisAllOdds(arr1));
console.log(lisAllOdds(arr2));
console.log(lisAllOdds(arr3));
