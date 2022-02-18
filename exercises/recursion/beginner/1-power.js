//emulate math Pow using recursion
/**
 * @description accepts a base and an exponent. Calculates the poser of base 
 * @param {number} base
 * @param {number} exp
 */
function pow(base,exp){
    if(exp<=0){
        return 1
    }
   return base * pow(base,exp-1)
}

console.log(pow(2,3))
console.log(pow(3,3))
console.log(pow(0,1))
console.log(pow(0,1))