/**
 * @description return sum of all even numbers nested in an object:
 * @example 
 * var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  nestedEvenSum(obj1); // 6
  @param {{}} obj
 */
function nestedEvenSum (obj) {
     let sum=0;
     
     for (const [_, value] of Object.entries(obj)) {
        if(typeof value === "number"){
            if(value % 2 === 0 ){
              sum += value;
            }
        }
        if(typeof value === "object"){
            sum += nestedEvenSum(value);
        }

        
      }
    return sum
  }
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
//   console.log(nestedEvenSum(obj1)); // 6
  console.log(nestedEvenSum(obj2)); // 10