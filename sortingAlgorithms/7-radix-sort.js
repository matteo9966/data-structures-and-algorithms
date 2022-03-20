/**
 * @description get digit of number at position
 * position is 1 indexed
 * 123%10 = 3 at i
 * 123 % 100 = 23 / 10  = 2.3 => 2 at position 1
 */
function getDigit(num, position) {
  let divider = 10 ** position;
  let reminderDevider = 10 ** (position + 1);
  let result = (num % reminderDevider) / divider;
  return Math.trunc(result)
}
function countDigits(num){
    let count = 0
    let result= num;
    if(num===0) return 1
    while(result>0){
       count = count + 1;
       result=Math.trunc(result/10);
       
    }
    return count;
}