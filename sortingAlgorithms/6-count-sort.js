/**
 *  * @description countSort only for positive values
 * 
 * @param {number[]} list
 * @example [ 1 4 1 2 7 5 2 ]
 * create a range array from of size max (7)
 * [ 0 0 0 0 0 0 0 ]
 * index of array is the number in the list, the value is how many occurences there are
 * i 1 2 3 4 5 6 7
 * [ 2 2 0 1 1 0 1 ]
 * 
 * replace this array with array that has arr[i] = arr[i] + arr[i-1]
 * i 1 2 3 4 5 6 7
 * [ 2 4 4 5 6 6 7 ] = arr
 *  
 * for each element of starting array select element of count array, the value at the position that has start array index is the position
 * in the result array;
 * element of starting array = 1
 * arr[1] = 2 , so 1 goes at position 2 // reduce count by 1 so arr[1]=1
 *  1 2 3 4 5 6 7
 * [  1          ]
 * 
 * arr[4] = 5 , so 4 goes at position 5, //reduce count by 1 so arr[4] = 4
 *  1 2 3 4 5 6 7 
 * [  1     4    ]
 * 
 * arr[1]=1 so 1 goes at position 1
 *  1 2 3 4 5 6 7
 * [1 1     4    ]
 * 
 * arr[2]=4 , arr[2] becomes 3
 *  
 *  1 2 3 4 5 6 7
 * [1 1   2 4    ]
 * 
 * arr[7]= 7 , arr[7] becomes 6
 * 
 *  1 2 3 4 5 6 7
 * [1 1   2 4   7]
 * 
 * .
 * . 
 * . 
 * 
 * and so on
 * the final result is 
 * [1 1 2 2 4 5 7]
 * 

 */

function countSort(list){ //list = [1,4,1,2,7,5,2]
    let countList = Array.from({length:(Math.max(...list)+1)},(_,i)=>0) //countlist = array(8)
    let resultList = Array.from({length:list.length},(_,i)=>0);
    for(let el of list){
       
        countList[el]=countList[el]+1;
    }
   
    for(let i=1; i< countList.length; i++){
        countList[i]=countList[i]+countList[i-1];
    }
    for(let el of list){
        countList[el] = countList[el]-1 ;
        let position = countList[el];
        resultList[position] = el;
    }
    return resultList

}

console.log(countSort([1,4,1,2,7,5,2,10,1,1,1,2,3,4,5,11,22,33,1,2,3,4,5]));