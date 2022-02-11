//#TODO: fai l'esercizio del 2-count-unique usando l'algoritmo di colt
function countUniqueValues(arr = []) {
  let counter = 0; //the counter that keeps track
  for (let i = 0; i <= arr.length - 2; ) {
    if (arr[i] != arr[i + 1]) { //if the adjacent are not the same a[i] is unique
      if (i === arr.length - 2) { //if I reached the last and they are not the same,add one for a[i] and one for a[i+1]
        counter++;
      }
      counter++;
    }
    if (arr[i] === arr[i + 1]) { 
      if (i === arr.length - 2) { //if i reached the end and i have i  
        counter++;
      }
    }

    i++;
  }
return counter
}

const cout=countUniqueValues([-1, -1, 1, 2, 2,3,3]);
console.log(cout);

function countUniqueValues2(){
    //add alternative solution
}