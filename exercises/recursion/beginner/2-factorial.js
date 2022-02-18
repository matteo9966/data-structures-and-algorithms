/**
 * @description factorial accepts number and returns a factorial of it
 * @param {number} num
 */
function factorial(num){
   if(num<=1){
       return 1
   }   
   return num * factorial(num-1) 
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(5))
console.log(factorial(10))