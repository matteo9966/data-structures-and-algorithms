//valid anagram
//
//check if word and anagram have the same length
/**
 * @param {string} word
 * @param {string} anagram
 * @returns {boolean}
 */
function validAnagram(word="",anagram=""){
   const lengthWord = word.length;
   const lengthAnagram= anagram.length;
   if(lengthAnagram!==lengthWord){
     return false
   }

   const splittedword= word.split('');
   const splittedanagram= anagram.split('');
   const wordmap={};
   const anagrammap={}

   splittedanagram.forEach(char=>{
      if(anagrammap[char]){
          anagrammap[char]=anagrammap[char]+1;
      }
      else{
          anagrammap[char]=1;
      }  
   })
   splittedword.forEach(char=>{
       if(wordmap[char]){
           wordmap[char]=wordmap[char]+1;
       }
       else{
           wordmap[char]=1
       }
   })

   
   
   for (const [key, value] of Object.entries(wordmap)) {
    if(anagrammap[key]!==value){
       return false;
    }
  }
  return true
  

}


console.log(validAnagram("",""));
console.log(validAnagram("mozza","zzoma"));
console.log(validAnagram("QWERTY","YTREWQ"));
console.log(validAnagram("MATTEO","OETTAM"));
console.log(validAnagram("GIGI","GGII"));
console.log(validAnagram("TONI","TONITONI"));