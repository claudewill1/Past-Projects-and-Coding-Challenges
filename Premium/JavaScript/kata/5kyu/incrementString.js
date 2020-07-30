const incrementString = str => {
    let result = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //check if string is empty, if so, return 1
    if(!str){
        return 1;
    }
    // iterate through the string using a for loop
    for(let i = 0; i < str.length; i++){
        // if the indexOf the current element of string is in
        // alphabet, add the the element of the current index to result
        if(alphabet.indexOf(str[i]) > -1){
            result += str[i];
        } else {
            // if the current element at an index is not an alphabetical character
            // slice it and the following elements which will be numbers and add to num
            let num = str.slice(i,str.length);
            // increment the number by one and assign to add
            let add = Number(num)+1;
            // convert the sum of adding 1 to num to a string using .toString() method
            let addStr = add.toString();
            // check to see if the num length is greater than addStr length
            if(num.length > addStr.length){
                // if true create variable insert and slice num starting at the first index 0
                // and end at the index which is num.length minus addStr.length
                let insert = num.slice(0, num.length - addStr.length);

                //add insert to result
                result += insert;
            }
            // add addStr to result then break out of loop
            result += addStr;
            break;

        }
        
    }
    // log result
    console.log(result);
    // check to see if there is a number present at the end of the string
    // if false add '1' to result
    if(alphabet.indexOf(str[str.length - 1]) > -1){
        result += '1';
    }
    // return result
    return result;
}