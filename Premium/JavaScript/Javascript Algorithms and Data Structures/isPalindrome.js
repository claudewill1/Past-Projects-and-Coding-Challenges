/** isPalindrome
 * Write a recursive function called isPalindrome which returns true if the string
 * passed to it is a palindrome (reads the say forward and backwards). Otherwise
 * return false.
 * 
 * Examples:
 *  isPalindrome('awesome') // false
    isPalindrome('foobar') // false
    isPalindrome('tacocat') // true
    isPalindrome('amanaplanacanalpanama') // true
    isPalindrome('amanaplanacanalpandemonium') // false
 */

 const isPalindrome = s => {
     const len = s.length;
     
     if(len === 0 || len === 1) return true;

     if(s.charAt(0) === s.charAt(len - 1)){
        return isPalindrome(s.substring(1, len - 1))
     }
     return false;
 }
 
 
 
           



console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false