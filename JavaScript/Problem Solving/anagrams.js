/** Given two strings, write a function to determine if the
 * second string is an anagram of the first. 
 */

 const validAnagram = (str1, str2) => {
     // Establish counters
     let frequencyCounter1 = {};
     let frequencyCounter2 = {};
     // convert strings to arrays
     const stringA = str1.split('');
     const stringB = str2.split('');
     // check if both strings are the same length
    if(stringA.length !== stringB.length) {
        return false;
    }

     // loop through first array to make the first counter
     for(let letter of stringA) {
         let char = letter.toLowerCase();
         if(/[a-z]/.test(char)) {
             // test to see if letter is in counter object
             // if true add one to counter, else set to 0
             // so we can start at one
             frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
         }
     }
     // loop through second array and make the second counter
     for(let letter of stringB) {
         let char = letter.toLowerCase();
         if(/[a-z]/.test(char)) {
             frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
         }
     }
     // create final loop that will check to see if letters are in both counter objects
     for(let key of Object.keys(frequencyCounter1)) {
         // check wheter key/letter exists in second string
         if(!frequencyCounter2[key]) {
             return false;
         }
         // insure that frequency of letter in first string is the same
         // in second string
         if (frequencyCounter1[key] !== frequencyCounter2[key]) {
             return false;
         }
     }
     // if it is an anagram, return true
     return true;

 }

 console.log(validAnagram('','')); // true
 console.log(validAnagram('aaz','zza')); // false
 console.log(validAnagram('anagram','nagaram')); // true
 console.log(validAnagram('rat','car')); //false
 console.log(validAnagram('iceman','cinema')); // true
 console.log(validAnagram('awesome','awesom')); //false
 console.log(validAnagram('qwerty','qeywrt')); // true
 console.log(validAnagram('runescape', 'escape run')) // true