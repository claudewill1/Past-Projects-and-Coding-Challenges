/* 5. Longest Palindromic Substring
Medium

Given a string s, find the longest palindromic substring in s. 
You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:

Input: "cbbd"
Output: "bb"

*/

public class Solution {
    public string LongestPalindrome(string s){
        // get length of input string
        int n = s.Length;

        //Table[i, j] will be false if substring
        // str[i..j] is not palindrome. Else
        // table[i, j] will be true;
        bool[, ] tbl = new bool[n, n];

        // All substrings of length 1 are palindromes
        int maxLength = 1;
        for(int i = 0; i < n; i++) tbl[i,i] = true;

        // Check for substring len 2
        int start = 0;

        for(int i = 0; i < n - 1; i++){
            if(s[i] == s[i + 1]){
                tbl[i,i+1] = true;
                start = i;
                maxLength = 2;
            }
        }

        // check for len > 2
        // k is len of substring
        for(int k = 3; k <= n; k++){
            // fix the starting idx
            for(int i = 0; i < n - k + 1; i++){
                // Get the ending idx of substring from
                // starting idx i and len k
                int j = i + k - 1;

                // check for substring from ith idx
                // to jth idx if char at string = i+1 to 
                // str.charAt(j - 1) is a palindrome
                if(table[i+1,j-1]&&s[i] == s[j]){
                    tbl[i,j] = true;
                    if(k > maxLength){
                        start = i;
                        maxLength = k;
                    }
                }
            }
        }
        // return length of the longest palindrome string
        return maxLength;
    }
}