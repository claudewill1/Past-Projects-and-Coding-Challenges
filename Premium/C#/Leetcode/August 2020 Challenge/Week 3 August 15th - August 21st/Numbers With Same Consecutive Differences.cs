/*Return all non-negative integers of length N such that the absolute difference between every two consecutive digits is K.

Note that every number in the answer must not have leading zeros except for the number 0 itself. For example, 01 has one leading zero and is invalid, but 0 is valid.

You may return the answer in any order.

 

Example 1:

Input: N = 3, K = 7
Output: [181,292,707,818,929]
Explanation: Note that 070 is not a valid number, because it has leading zeroes.

Example 2:

Input: N = 2, K = 1
Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]

 

Note:

    1 <= N <= 9
    0 <= K <= 9

*/
public class Solution {
    private int n;
    private int k;
    private List<int> result = new List<int>();
    public int[] NumsSameConsecDiff(int N, int K) {
        n = N;
        k = K;
        //if(n==0) return new int[0];
        if(n==1) return new int[] {0,1,2,3,4,5,6,7,8,9};
        
        for(int i = 1; i <= 9; i++) dfs(i, n - 1);
        
        int[] res = new int[result.Count];
        for(int i = 0; i < result.Count; i++) res[i] = result[i];
        
        return res;
        
    }
    
    private void dfs(int curNum, int digitsLeft){
        if(digitsLeft == 0){
            result.Add(curNum);
            return;
        }
        int lastDigit = curNum%10;
        if((lastDigit + k) <= 9) dfs(curNum*10+lastDigit+k,digitsLeft - 1);
        if(lastDigit - k >= 0 && k > 0) dfs(curNum*10+lastDigit-k,digitsLeft - 1);
    }
}