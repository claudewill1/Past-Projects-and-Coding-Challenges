/**Sliding Window - findLongestSubstring
 * Write a function called findLongestSubstring, which accepts a string and
 * returns the length of the lonest substring with all distinct characters.
 * 
 * Examples:
 *  findLongestSubstring('') // 0
 *  findLongestSubstring('rithmschool') // 7
 *  findLongestSubstring('thisisawesome') // 6
 *  findLongestSubstring('thecatinthehat') //7
 *  findLongestSubstring('bbbbbb') // 1
 *  findLongestSubstring('longestsubstring) // 8
 *  findLongestSubstring('thisishowwedoit) // 6
 */

 const findLongestSubstring = (s) => {
    let longest = 0, seen = {}, start = 0;

    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(seen[char]) {
            start = Math.max(start, seen[char]);
        }
        //index - beginning of substring + 1 including current in count;
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
 }

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) //7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6