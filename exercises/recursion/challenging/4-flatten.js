
/**
 * @description flatten an array of arrays
 *  
 * Examples:
 * - flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
 * - flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
 * - flatten([[1],[2],[3]]) // [1,2,3]
 * - flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
 * @param {Array} arr 
 */
function flatten(arr){
  
  const result=[]

  function flattenHelper(copy){
      if(copy[0]==undefined){
        return
      }
      if(!Array.isArray(copy[0])){
        result.push(copy[0])
      }
      if(Array.isArray(copy[0])){
         flattenHelper(copy[0])
      }
      const newArr = copy.slice(1);
      return flattenHelper(newArr);
    }
    flattenHelper(arr);

    return result
}
  
// console.log(flatten([1,2,3,4,5]))
// console.log(flatten([1, 2, 3, [4, 5] ]))
// console.log(flatten([1, [2, [3, 4], [[5]]]]))
// console.log(flatten([[1],[2],[3]]))
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))

  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3


  /* Colt's Solution:
  function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}
  */