/*const generateHashtag = str => {
    // check if string is empty or greater than 140 characters if true return false
    if(!str || str.length > 140){
        return false;
    }  
    else{
        // transform the entire string to lowercase
        // split the string at each space into an array of str
        // use the .map() iterator method to iterate through arr of
        // string. for the character at the index of 0 of each string in array
       
        let uppStr = str.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ').trim();
        
        let splitStr = uppStr.split('');
        
        splitStr.unshift('#');
        return splitStr.join('').trim().replace(/\s+/g,'');
    }

}
*/

const generateHashtag = str =>{
    let hashtag = '#';

    for(let i = 0; i < str.length; i++){
        if((i === 0 || /\s/.test(str[i-1]))&& !/\s/.test(str[i])){
            hashtag += str[i].toUpperCase();
        } else if (!/\s/.test(str[i-1]) && !/\s/.test(str[i])){
            hashtag += str[i]
        }
    }

    if(hashtag === '#' || hashtag.length > 140 || str === ''){
        return false
    } else{
        return hashtag;
    }
}
generateHashtag(' a big fat man down by the river');