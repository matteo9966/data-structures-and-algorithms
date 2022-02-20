/**
 * @description check if str1 forms a subsequence in str2
 * @param {string} str1
 * @param {string} str2
 */
function isSubsequence(str1, str2) {
  const arr1 = str1.slice('');
  const arr2 = str2.slice('');

  if (arr2.length === 0) {
    return false;
  }
  if (arr1.length === 0) {
    return true;
  }
  let i = 0,
    j = 0;
    
  while (j < arr2.length) {
     console.log(arr1[i],arr2[j]);
    if (arr2[j] === arr1[i]) {
      i++;
      if (i === arr1.length) {
        return true;
      }
    }
    j++;
  }
  return false;
}

/* 
 str1= otello rrier

 str2= terrier

 j=0 i=0
 
 o!=t j++
 t==t i++ j++ i=1 j=2
 e==e i++ j++ i=2 j=3
 l!=r     j++ i=2 j=4
 l!=r     j++ i=2 j=5
 o!=r     j++ i=2 j=6
 r==r i++ j++ i=3 j=7
 r==r i++ j++ i=4 j=8
 i==i i++ j++ i=5 j=9
 e==e i++ j++ i=6 j=10
 r==r i++ j++ i=7 j=11 i==terrier.lengh return true!         
 
  
  */

 console.log(isSubsequence('dogo','do re go'))