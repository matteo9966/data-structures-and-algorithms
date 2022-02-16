/**
 * @description sorted array,find if there is a pair in the array where the average is equal to avg
 * first i 2*avg
 * now i use two arrays:
 * arr = xArr = the input array
 * yArr = array made of elements made by subtracting x to 2avg (avg = (x+y)/2 => y = 2avg-x)
 * using the yarr i search for a x y pair that sadisfies the avg formula x + y = 2avg
 * 
 * @param {Array} arr a sorted array
 * @param {number} avg the average of the pair to find
 */
function averagePair(arr,avg){
    
    if(arr.length<2) return false

    const doubleAvg= 2 * avg;
    const yArr = arr.map(el=>{
      return doubleAvg - el;
    })
     
    let i , j ;
    j=arr.length-1;
    
    for(i=0;i<arr.length && j>i ;){
      const candidateY = arr[j];
      if(candidateY===yArr[i]){
          return true;
      }
      if(candidateY>yArr[i]){
          j--
      }
     if(candidateY<yArr[i]){
         i++
     }
   
    }
     return false
  }

  const arr = [-3,-2,1,2,3,5]
  console.log(averagePair(arr,0));
  console.log(averagePair(arr,1));
  console.log(averagePair(arr,100));