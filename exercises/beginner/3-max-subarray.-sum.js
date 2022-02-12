//max subarray sum: given an array find the max subarray sum :
// maxSubarraySum([1,2,3,4,5],2) 2= size of subarray
// [1,2] [2,3] [3,4] [4,5] are the subarrays, maxsum is 9=4+5
// | complexity should be O(n) | // watch Colts video!
/**
 * @param {Array} arr the array
 * @param {Number} n the size of the subarray
 * @returns {Number} largest sum 
 */
function maxSubarraySum(arr,n){
 
}

//something wrong

/* 
logic:
example
f(arr=[1,2,2,4,1,5],n=3): 

maximum = a[0]+a[1]+a[2] = 5,
tempSum = maximum = 5
L = arr.length = 6
i=0,
j=3, //j=n

---

j<L  ? tempSum= tempSum - a[0] + a[j]
3<6 ? tempSum=      5   - 1    + 4    =   8
tempsum>maximum? maximum=tempsum => 8>5? maximum=8
i++ i=1
j++ j=4
---
tempSum= tempsum - a[1] + a[4] = 8 - 2 + 1 = 7
7>8? no
i++ i=2
j++ j=5
---
tempSum = tempSum - a[2] + a[5] = 7 - 2 + 5 = 10
10>8? maximum = 10

i++
j++ j=6
---
j>L : return maximum = 10 







*/