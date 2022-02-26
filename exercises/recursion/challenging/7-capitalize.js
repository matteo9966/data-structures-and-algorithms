/**
 * @example
 *    let words = ['i', 'am', 'learning', 'recursion']; 
 *    capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
 * @param {[String]} arr
 */
function capitalizeWords  (arr) {
  let i = arr.length -1 
  /**
 * @param {[String]} arr
 */
    function capitalizeWordsHelper (arr) {
         if(i<0){
             return 
         }
        arr[i]=arr[i].toUpperCase()
        i--;
        capitalizeWordsHelper(arr)
    }
      capitalizeWordsHelper(arr)

      return arr


    
  }
  
  let words = ['i'];
  console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']