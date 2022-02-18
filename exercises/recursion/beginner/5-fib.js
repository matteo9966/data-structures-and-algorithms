/**
 * @description "The Fibonacci sequence is a series of numbers in which each number is the sum of the two that precede it"
 * - Return n-th element of the fibonacci sequence
 * -  fib(4) = 3
 * - fib(10) = 55
 * - fib(28) = 317811
 * - fib(35) = 9227465
 * @param {number} num  the n-th
 *  */
function fib(n) {
  if (n === 1) return 1;
  if (n == 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4))
console.log(fib(10))
console.log(fib(28))
console.log(fib(35))