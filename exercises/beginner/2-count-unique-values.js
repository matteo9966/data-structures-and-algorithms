//#TODO: fai l'esercizio del 2-count-unique usando l'algoritmo di colt
function countUniqueValues(arr = []) {
  let counter = 0; //the counter that keeps track
  for (let i = 0; i <= arr.length - 2; ) {
    if (arr[i] != arr[i + 1]) {
      //if the adjacent are not the same a[i] is unique
      if (i === arr.length - 2) {
        //if I reached the last and they are not the same,add one for a[i] and one for a[i+1]
        counter++;
      }
      counter++;
    }
    if (arr[i] === arr[i + 1]) {
      if (i === arr.length - 2) {
        //if i reached the end and i have i
        counter++;
      }
    }

    i++;
  }
  return counter;
}

// const cout = countUniqueValues([-1, -1, 1, 2, 2, 3, 3]);
// console.log(cout);

/* second way: */
//two pointers, i and j
//[-1,-1,1,2,2,3,4]
// i   j             => a[i]==a[j] : j++
//[-1,-1,1,2,2,3,4]
//  i    j           => a[i]!=a[j] : i++ ,a[i]=a[j], j++
//[-1,1,1,2,2,3,4]
//    i   j          => a[i]!=a[j] : i++,a[i]=a[j], j++;
//[-1,1,2,2,2,3,4]
//      i   j        => a[i]==a[j] : j++;
//[-1,1,2,2,2,3,4]
//      i     j      => a[i]!=a[j] : i++,a[i]=a[j],j++;
//[-1,1,2,3,2,3,4]
//        i     j    => a[i]!=a[j] : i++,a[i]=a[j],j++;
//[-1,1,2,3,4,3,4]
//          i      j => j>length : return i+1 = 5

function countUniqueValues2(arr = []) {
  let i,j,count = 0;
  for (i = 0, j = 1; j < arr.length; j++) {
    if (arr[i] != [arr[j]]) {
       i++;
       arr[i]=arr[j]
      }
      count=i+1;
  }
  
  return count;
}


console.log(countUniqueValues2([-1, -1])) // questo non lo considera
console.log(countUniqueValues2([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]))
console.log(countUniqueValues2([-1, -1, 1, 2, 2, 3]))
console.log(countUniqueValues2([-10,1,5,60,100,100,111]))
console.log(countUniqueValues2([1,1,1,1,1,1,1,1,1,2]))

