/** Given a string, find the length of the longest substring without repeating 
 * characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence 
             and not a substring.

*/

const lengthOfLongestSubstring = (s) => {
    let visited = new Map();
    let output = '';
    let substringLen = 0;
    for(let start = 0, end = 0; end < s.length; end++) {
        let currChar = s.charAt(end);
        if(visited.has(currChar)) {
            start = Math.max(visited.get(currChar) + 1, start);
        }

        if(output.length < (end - start + 1)) {
            output = s.substring(start, end + 1);
        }
        visited.set(currChar, end);
    }
    return substringLen = output.length;
}

lengthOfLongestSubstring('abcafebraaethtrj');