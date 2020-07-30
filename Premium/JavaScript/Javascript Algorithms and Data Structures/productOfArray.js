/**productOfArray
 * Write a function called productOfArray which takes in an array of numbers
 * and returns the product of them all.
 * 
 * Examples:
 *  productOfArray([1,2,3])
 *  productOfArray([1,2,3,10])
 */

const productOfArray = arr => (arr.length === 1) ? arr[0] : (arr.pop() * productOfArray(arr));

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60