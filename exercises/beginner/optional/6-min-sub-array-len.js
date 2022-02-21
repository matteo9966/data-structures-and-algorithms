/**
 * @description function should return the minimal length of contigous subarray of which the sum is greater than or equal to the integer passed to the function.If there isn't one,return 0 instead
 * @param {Array} arr 
 * @param {number} val 
 * 
 */
function minSubArrayLen(arr,val){
    let initialSum = arr.reduce((sum,val)=>{return sum+val},0)
    if(initialSum<val){
        return 0
    }
///IN PAUSA NON CI RIESCO :(
}

let arr = [2,3,1,2,4,3]; let val = 7;
let arr1 = [2,1,6,5,4]; let val1 = 9;
let arr2 = [3,1,7,11,2,9,8,21,62,33,19]; let val2 = 52;
console.log(minSubArrayLen(arr,val))
console.log(minSubArrayLen(arr1,val1))
console.log(minSubArrayLen(arr2,val2))