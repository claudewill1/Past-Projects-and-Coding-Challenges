/**In this Kata, we will check if a string contains consecutive letters as they 
 * appear in the English alphabet and if each letter occurs only once.

For example: 
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive, and c is missing.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True

All inputs will be lowercase letters.  */

const solve = (s) => 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));

console.log(solve('abc')) // true
console.log(solve('abd')) // false
console.log(solve('dabc')) // true
console.log(solve('v')) // true
console.log(solve('abbc')) // false;