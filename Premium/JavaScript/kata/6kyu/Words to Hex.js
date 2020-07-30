const wordsToHex = str =>{
    let arr = str.split(' ')
    // get first 3 letters of each word
    .map(x=>[...x.slice(0,3)]
    // find the character code for each character
    .map((i,j)=>x.charCodeAt(j))
    // convert to hexadecimal, join hex codes for every
    // six characters and add a '#' to the beginning
    .map(v=>v.toString(16)).join('')
    .padEnd(6,'0')).map(x=>'#'+x);
    
    return arr;


    
}

console.log(wordsToHex("Hello, my name is Gary and I like cheese."))