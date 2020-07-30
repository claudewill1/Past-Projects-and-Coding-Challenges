const LetterChanges = str => {
   let newTxt = str.replace(/[a-z]/gi, function(c){
       switch(c){
           case 'z': return 'a';
           case 'Z': return 'A';
           default: return String.fromCharCode(1+c.charCodeAt(0));
       }
   });
   return newTxt.replace(/[aeiou]+/g, function(vowel){
        return vowel.toUpperCase();
   });
       
   
   
}


console.log(LetterChanges("abcdef4g!"))