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
        int n = s.Length;

        bool[, ] table = new bool[n,n];

        int maxLen = 1;
        for(int i = 0; i < n; i++){
            table[i, i] = true;
        }

        // Check for length of sub-string of length 2
        int start = 0;

        for(int i = 0; i < n - 1; i++){
            if(s[i]==s[i+1]){
                table[i,i+1] = true;
                start = i;
                maxLen = 2;
            }
        }

        // Check for lengths greater than 2
        // k is length of substring
        for(int k = 3; k <= n; k++){
            // Fix the starting index
            for(int i = 0; i < n - k + 1; i++){
                // get the ending index of substring from
                // starting index i and length k
            }
        }
    }
}