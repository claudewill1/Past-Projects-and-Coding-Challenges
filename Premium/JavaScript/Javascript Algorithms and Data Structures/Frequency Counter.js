/**Frequency Counter - sameFrequency
 * Write a function called sameFrequency. Give two positive integers,
 * find out if the two numbers have the same frequency of digits.
 * 
 * Your solution MUST have the following complexities:
 * Time: O(N)
 * 
 * Sample Input:
 * console.log(sameFrequency(182,281)) // true
   console.log(sameFrequency(34,14)) // false
   console.log(sameFrequency(3589578,5879385)) // true
   console.log(sameFrequency(22,222)) // false
 * 
 */

const sameFrequency = (a,b) => {
    
    // check if input is null
    // if true, return false
    if((!a) || (!b)) return false;

    // create two arrays of digits for each number
    const arr1 = Array.from(String(a),Number);
    const arr2 = Array.from(String(b),Number);

    // check if arrays are same length if not
    // return false
    // set up counters
    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let val of arr1) freqCounter1[val] = (freqCounter1[val] || 0) + 1;
    for (let val of arr2) freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    for (let key in freqCounter1) {
        if (!(key in freqCounter2)) return false;
        if (freqCounter1[key] !== freqCounter2[key]) return false;
    }
    return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578,5879385)) // true
console.log(sameFrequency(22,222)) // false