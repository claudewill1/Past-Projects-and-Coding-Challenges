//split the alphabet into an array of individual
    // characters using .split(). Next, use the 
    // .filter() iteration method to iterate through the 
    // array containing the letters of the alphabet
    // for each letter in the string check to see
    // if it contains the current index of the alphabet
    // array, if so remove remove 1 element
    // when length reaches 0 return true;
    // else if a character of the alphabet is missing
    // return false
const isPangram = string => {
    let lc = string.toLowerCase();
    
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .filter(c => lc.indexOf(c) === -1)
        .length === 0;

}

// test a string if it is a Pangram
console.log(isPangram('abcdefghijklmnopqrstuvvvvv'))