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

/**
 *   @param {number[]} arr 
*/
function largestEl(arr){
  let largest = arr.reduce((prev,curr)=>{
    if(prev<curr){
      return curr
    }
    return prev
  },-Infinity);
   return largest
}

/**
 * @description
 * create 10 buckets (queues) for each digit (0 to 9)

for each digit placing

  for each element in list

    move element into respective bucket

  for each bucket, starting from smallest digit

    while bucket is non-empty

      restore element to list
 * @param {number[]} arr 
 */
function radixSort(arr){
  let largest = largestEl(arr);
  let digitsOfLargest = countDigits(largest);
  for(let i = 0 ; i < digitsOfLargest ; i ++){
    let buckets = Array.from({length:10},(_,i)=>[])
    arr.forEach(el=>{
        let digit=getDigit(el,i);
        buckets[digit].push(el);
    })

    arr = buckets.flat();
    console.log(arr);
  }

}


let arr = [3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743, 4127]

radixSort(arr);