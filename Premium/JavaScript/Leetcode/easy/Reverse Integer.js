/**Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within 
the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, 
assume that your function returns 0 when the reversed integer overflows.
 */

 const reverse = n => {
    const isNegative = n < 0 ? true : false;

    if(isNegative){
        n = n * -1;
    }

    let rev = 0;
    while(n > 0){
        rev = (rev * 10) + (n % 10);

        n = parseInt(n/10);
    }

    if(rev > 2**31){
        return 0;
    }

    return isNegative ? rev * -1 : rev;

 }


 console.log(reverse(123))