/**In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the lexicographically lowest character. [For Golang return rune]

All inputs will be lower case.

For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'

More examples in test cases. Good luck!
Fundamentals */

// Solution 1
const solve = (st) => {
    
    let greatestVal = 0;
    for(let i = 0; i < st.length; i++) {
        let curVal = st.charCodeAt(i);
        if (curVal > greatestVal) {
            greatestVal = curVal;
            
        }
    }
    
    return String.fromCharCode(greatestVal);
}

//Solution 2
const solve = (st) => {
    // split the string into an array of characters
    const characters = st.split('');
    Math.max(...characters.map(c => c.charCodeAt(0)))
    
    return String.fromCharCode(greatestVal);


}

solve('hello');