/**
 * @description palindrome returns true if str is a palindrome!
 * @param {string} str candidate palindrome
 * @returns {boolean}
 */
function isPalindrome(str){
   if(str.length===0 || str.length===1){
       return true;
   }
   if(str[0]!==str[str.length-1]){
       return false
   }
   return isPalindrome(str.slice(1,str.length-1));
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
console.log(isPalindrome('awesome'))
console.log(isPalindrome('foobar'))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpandemonium'))