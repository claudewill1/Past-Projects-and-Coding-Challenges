const findShort = str=>{
    // split string into an array of words
    let arr = str.split(' ');
    // find the word with the minimum length out of all words
    // use Math.min which gets the minimum, use the .apply() method
    // call Math as the first arguement, then the .map() method on
    // arr with an anonymous function as a argument that returns the length of 
    // each string in arr
    let min = Math.min.apply(Math, arr.map(function(s){return s.length;}));
    // return the shortest string
    return min;
}