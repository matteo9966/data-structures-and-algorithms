/**
 * @description arr is an array of  numbers, maxSubarraySum finds the subsequence of len elements 
 * with greatest sum
 * @param {[number]} arr
 * @param {number} len
 */
function maxSubarraySum(arr,len){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length<len){
        return null
    }
    if(arr.length===0){
        return 0
    }
    if(typeof len !=='number'){
        return null
    }

    let sum=0;
    let i=0,j=len; 
    for(let i=0; i<len; i++){
      sum+=arr[i]
    }
    let newSum = sum;
    while(j<arr.length){
        if(typeof arr[j] !== 'number'){
            return null
        }
        newSum = newSum - arr[i] + arr[j]

        console.log(sum,arr[i],arr[j]);
        if(newSum>sum){
            sum=newSum
        }
        i++;
        j++;
        console.count('iterations');
    }
    return sum;

}

let arr1 =[-1,-2,3,-4,1]
let arr2 =[2,2,30,4,1]
let arr3 =[]

console.log(maxSubarraySum(arr1,2))
// console.log(maxSubarraySum(arr2,3))
// console.log(maxSubarraySum(arr3,5))

/* 
 [1,2,1,4,6,3]  
 [1,2]          3
   [2,1]        3
     [1,4]      5
       [4,6]    10 
         [6,3]  9
                => return [4,6]
*/