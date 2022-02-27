/** 
 * @returns {[String]}
 * @param {{}} obj 
 * @description collect all typeof string and return an array
 * @example
 *  const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"]) */
function collectStrings(obj) {
   let arr=[];
   for(const [key,value] of Object.entries(obj)){
       if(typeof value === 'string'){
           arr.push(value);
       }
       if( typeof value === 'object' && !Array.isArray(value))
       arr = [...arr,...collectStrings(value)]
   }
   
   return arr
}

  const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"]) 