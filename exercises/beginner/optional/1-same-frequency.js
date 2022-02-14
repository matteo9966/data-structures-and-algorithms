/**
 * @description 
 * Write a function, given two integers, find out if the two
 * numbers have the same frequency of digits
 * 
 * (182,281) => true
 * (24,14)   => false
 * 
 */
function sameFrequency(num1,num2){
  const string1 = ""+num1;
  const string2 = ""+num2;
  if(string1.length!==string2.length){
      return false
 }
 const obj1 ={};
 const obj2 ={};

 string1.split("").forEach(char=>{
     if(!obj1[char]){
         obj1[char]=0;
     }
     obj1[char]+=1;
 });
 string2.split("").forEach(char=>{
     if(!obj2[char]){
         obj2[char]=0;
     }
     obj2[char]+=1;
 });

 for(const [key,value] of Object.entries(obj1)){
     if(obj2[key]!==value){
         return false
     }
 }
  return true 
 

}

console.log(sameFrequency(12,12))
console.log(sameFrequency(122,12))
console.log(sameFrequency(1112,1222))
console.log(sameFrequency(122,122))
console.log(sameFrequency(121212,121212))