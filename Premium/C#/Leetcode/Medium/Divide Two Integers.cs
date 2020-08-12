/* 29. Divide Two Integers
Medium

Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.

Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = truncate(-2.33333..) = -2.

Note:

    Both dividend and divisor will be 32-bit signed integers.
    The divisor will never be 0.
    Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

*/

public class Solution {
    public int Divide(int dividend, int divisor){
        // handle special cases
        if(divisor == 0) return int.MaxValue;
        if(divisor==-1 && dividend == int.MinValue) return int.MaxValue;

        //get positive values
        long pDivdnd = Math.Abs((long)dividend);
        long pDivsr = Math.Abs((long)divisor);

        int res = 0;
        while(pDivdnd >= pDivsr){
            // calc num of left shifts
            int numShift = 0;
            while(pDivdnd >= (pDivsr<<numShift)){
                numShift++;
            }

            //dividend minus the highest shifted val
            res += 1<<(numShift-1);
            pDivdnd -= (pDivsr<<(numShift-1));
        }
        // create negative result variable to hold a negative version of res
        // for later use
        int negRes = -res;
        if((dividend>0 && divisor>0)||(dividend<0 && divisor < 0)) {
            return res;
        } else {
            return negRes;
        }
    }
}