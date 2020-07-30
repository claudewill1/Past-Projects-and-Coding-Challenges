/* Write a class that, when given a string, will return an uppercase string with each letter shifted forward in 
the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'

If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].
*/
class CaesarCipher {
    // create constructor for CaeserCipher class 
    constructor(shift){
        this.shift = shift;
        this.alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
                        'o','p','q','r','s','t','u','v','w','x','y','z'];
    }
    // create encode method
    encode(s){
        let newStr = '';
        console.log(newStr);
        // for loop to iterate through the length of the string which is passed in
        for(let i = 0; i < s.length; i++){
            if(this.alphabet.includes(s[i])){
                // check to see if the current index of s + 5 is greater than this.alphabet.length
                // if true assign the the current index + 5 - the lengthof the alphabet,  else
                //  assign the letter to the index of index + 5
                const newInd = (this.alphabet.indexOf(s[i]) + 5) > this.alphabet.length ?
                (this.alphabet.indexOf(s[i])+5)-this.alphabet.length : (this.alphabet.indexOf(s[i]) + 5);
                
                newStr += this.alphabet[newInd];
            } else {
                newStr += s[i];
            }
        }
        // return encoded string in all caps
        return newStr.toUpperCase();
    }
    decode(s){
        let newStr = '';
        for(let i = 0; i < s.length; i++){
            if(this.alphabet.includes(s[i])){
                // perform the opposite of decode, subtract - from the current index, if i is less than
                // zero take the current index of s[i]+5 and add the length of the alphabet instead of subtracting
                const newIndex = (this.alphabet.indexOf(str[i])-5) < 0 ? (this.alphabet.indexOf(s[i])+5) + this.alphabet.length :
                (this.alphabet.indexOf(s[i])-5);
                newStr += this.alphabet[newIndex];
            } else {
                newStr += s[i];
            }
        }
        return newStr.toUpperCase();
    }
}