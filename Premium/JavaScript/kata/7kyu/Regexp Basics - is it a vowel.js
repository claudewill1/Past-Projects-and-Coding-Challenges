/*String.prototype.vowel = function(){
    return ['a','e','i','o','u'].indexOf(this.toLowerCase()) !== -1;
} */

String.prototype.vowel = function(){
    return this.includes(/^[aeiouAEIOU]$/);
}

''.vowel();
'a'.vowel();
'E'.vowel();
'ou'.vowel();
'z'.vowel();
'lol'.vowel();