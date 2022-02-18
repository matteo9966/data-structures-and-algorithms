// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
/**
 * @description recursive range, given a number sum all values from 1 to number
 * @param {number} num
 */
function recursiveRange(num){
    if(num===1){
        return 1
    }
    return num + recursiveRange(num-1)
   
}
