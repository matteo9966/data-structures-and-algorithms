// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
/**
 * @description prodductOfArray accepts an array and returns product of its values
 * @param {[number]} arr 
 */
function productOfArray(arr){
    if(arr.length===0){
        return null
    }
    if(arr.length===1){
        return arr[0];
    }
   return arr[0] * productOfArray(arr.slice(1))

}
let arr = [1,2,3,4,5]
let arr1 = [1,1,1,1,1,]
let arr2 =[]
let arr3 =[19];

console.log(productOfArray(arr))
console.log(productOfArray(arr1))
console.log(productOfArray(arr2))
console.log(productOfArray(arr3))
