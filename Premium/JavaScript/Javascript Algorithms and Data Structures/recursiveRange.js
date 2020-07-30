/**recursiveRange
 * Write a function called recursiveRange which accepts a number and adds up all the numbers
 * from 0 to the number passed into the function.
 */
const recursiveRange = n => (n === 1) ? 1 : n + recursiveRange(n - 1);


console.log(recursiveRange(1000))