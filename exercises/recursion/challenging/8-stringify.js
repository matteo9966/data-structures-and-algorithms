/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
/** 
 * @description get input object output object with numbers stra
 *  */ 
function stringifyNumbers(obj){
    const newObj = {};

    for(const [key,value] of Object.entries(obj)){
        if(typeof value !== 'object'){
           
            newObj[key]=value;
            if(typeof value === 'number'){
                newObj[key] = value.toString();
            }   

        }
        
        if(typeof value === 'object' && !Array.isArray(value)){
            newObj[key]=stringifyNumbers(value);
            
        }
        if(Array.isArray(value)){
            newObj[key]=value;
            
        }
        
    }
    return newObj;
}

// let obj = {
//     num: '1',

// }

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj))
