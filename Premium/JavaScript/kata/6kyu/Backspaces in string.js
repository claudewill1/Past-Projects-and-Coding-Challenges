/*Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  "" */
const cleanString = s =>{
    // check if length of s is less than or equal to 0
    // if true, return and empty string '';
    if(s.length <= 0) return '';
    // check to see if the string includes a '#' after being split into an array
    // if false return the string
    if(!s.split('').includes('#')) return s;
    // test if s only includes '#' using regex.test()
    // if true return an empty string
    if(/^[\#]+$/ig.test(s)) return '';

    //split the string into an array of characters
    let splitStr = s.split('');

    // use for loop to iterate through splitStr array
    // removing every character that is followed by an '#' along with the 
    // # symbol
    for(let i = 0; i < splitStr.length; i++){
        if(splitStr[i+1]==='#'){
            //splice out the current index through the # following
            splitStr.splice(i,2);
            //break out of the loop
            break;
        }
    }
    return cleanString(splitStr.join(''));
}