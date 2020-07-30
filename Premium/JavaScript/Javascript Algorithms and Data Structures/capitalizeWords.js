/**capitalizeWords
 * Write a recursive function called capitalizeWords. Given an array of words,
 * return a new array containing each word capitalized.
 */

 const capitalizeWords = arr => {
    let result = [];
    const helperFn = arr => {
       if(arr.length === 0){
          return;
       }
        result.push(arr[0].toUpperCase());
        return helperFn(arr.slice(1));
    }
    helperFn(arr);
    return result;
 }

 let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']