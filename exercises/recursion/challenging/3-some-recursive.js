// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

/**
 * @param {Array} arr
 * @param {Function} callback 
 * @description a recursive version of array.some()
 */
function someRecursive(arr,callback){
    if(arr.length===0){
        return false
    }
    if(callback(arr[0]))
     {return true}
     return someRecursive(arr.slice(1),callback);
  }

  const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd))// true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)) // fals)