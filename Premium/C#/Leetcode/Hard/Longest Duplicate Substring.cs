/*1044. Longest Duplicate Substring
Hard

Given a string S, consider all duplicated substrings: (contiguous) substrings of S that occur 2 or more times.  (The occurrences may overlap.)

Return any duplicated substring that has the longest possible length.  (If S does not have a duplicated substring, the answer is "".)

 

Example 1:

Input: "banana"
Output: "ana"

Example 2:

Input: "abcd"
Output: ""

 

Note:

    2 <= S.length <= 10^5
    S consists of lowercase English letters.

*/
public class Solution {
    
    public string LongestDupSubstring(string S){
        

    }
    
    public int search(int L, int a, long modulus, int n, int[] nums){
        // compute hash
        long h = 0;
        for(int i = 0; i < L; i++) h=(h*a+nums[i])%modulus;
        
        // hashes of strings of length L which have already been seen
        HashSet<long> seen = new HashSet<long>();
        seen.Add(h);

        // const value to be used often Math.Pow(a,L) % modulus
        long aL = 1;
        for (int i = 1; i <= L; i++) aL = (aL * a) % modulus;

        for(int start = 1; start < n - L + 1; start++){
            // in O(1) time compute rolling hash
        }
    }

}