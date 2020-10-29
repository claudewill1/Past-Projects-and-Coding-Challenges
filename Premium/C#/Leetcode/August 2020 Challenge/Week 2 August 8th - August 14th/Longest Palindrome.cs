/* 409. Longest Palindrome
Easy

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
*/
public class Solution{
    public int LongestPalindrome(string s){
        int[] count = new int[128];
        foreach(char c in s.ToCharArray()) count[c]++;

        int res = 0;
        foreach(int v in count){
            res+=v/2*2;
            if(res % 2 == 0 && v % 2 == 1) res++;
        }
        return res;

    }

}