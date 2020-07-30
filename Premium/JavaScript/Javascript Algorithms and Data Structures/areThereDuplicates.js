/**Frequency COunter / Multiple Pointers - areThereDuplicates
 * Implement a function called, areThereDuplicates which accepts a variable number 
 * arguments, and checks whether there are any duplicates among the arguments passed in. You
 * can solve this using the frequency counter pattern OR the multiple pointers
 * patter.
 * 
 * Examples:
 * 
 *  areThereDuplicates(1,2,3) // false
 *  areThereDuplicates(1,2,2) // True
 *  areThereDuplicates('a','b','c','a') // true
 * 
 * Restrictions:
 * Time - O(n)
 * Space - O(n)
 */

 const areThereDuplicates = (...args) => {
    
     let items = {};
     
     for(let i = 0; i < args.length; i++) {
         if(items[args[i]] === undefined) {
             items[args[i]] = 1;
         } else {
             return true;
         }
     }
     return false;
 }

console.log(areThereDuplicates(3, 9, 1)) // false
console.log(areThereDuplicates(4, 3, 8, 4)) // true
console.log(areThereDuplicates('n', '6', '3', 'Z')) // false
console.log(areThereDuplicates('n', 0, 'a', 'Z', 0)) // true