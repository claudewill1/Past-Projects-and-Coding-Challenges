/**Multiple Pointers - isSubsequence
 * WRite a function called isSubsequence which takes in two strings and checks whether
 * the characters from the first string form a subsequence of the characters from a 
 * second string. In other words, the function should check whether the characters in the 
 * first string appear somwhere in the second string, without changing their order.
 * 
 * Examples:
 *  isSubsequence('hello','hello world'); //true
 *  isSubsequence('sing',string') // true
 *  isSubsequence('abc','abracadabr') // true
 *  isSubsequence('abc','acb') // false (order matters)
 * 
 * Your solution MUST have ATLEAST the following complexities:
 * Time complexity - O(N)
 */

 const isSubsequence = (str1,str2) => {
     if(!str1) return true;

     let i = 0;
     for (let j = 0; j < str2.length; j++){
         if(i === str1.length - 1) return true;
         if(str1[i] === str2[j]) i++;
     }

     return false;
 }

 console.log(isSubsequence('hello','hello world')); //true
 console.log(isSubsequence('sing','string')) // true
 console.log(isSubsequence('abc','abracadabr')) // true
 console.log(isSubsequence('abc','acb')) // false (order matters)