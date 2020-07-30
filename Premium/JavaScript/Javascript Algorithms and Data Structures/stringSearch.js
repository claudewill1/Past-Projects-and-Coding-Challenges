/**Write a function stringSearch that takes a longer string and a shorter
 * string and searchs the longer string for a match to the shorter. Count
 * how many times the sub string appears.
 * 
 * Loop over the longer string.
 * Loop over the shorter string.
 * If the characters don't match, break out of the inner loop.
 * If the characters do match, keep going.
 * If you complete the inner loop and find a match,
 * increment the count of matches.
 * Return the count.
 */

 const stringSearch = (long, short) => {
    const l = long.length;
    const s = short.length;
    let result = 0;
    /*A loop to slide short string across long string to find match */
    for(let i = 0; i <= l - s; i++) {
        for(let j = 0; j < s; j++) {
            if(short[j] !== long[i+j]) break;
            if(j === s - 1) result++;
        }
    }
    return result;
 }

 console.log(stringSearch("abcefdabcedc",'abc'));