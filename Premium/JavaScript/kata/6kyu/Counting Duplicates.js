const duplicateCount = str=>{
    // create empty dictionary object
    const dict = {};
    // convert string to array with all characters lowercase
    const strArr = str.toLowerCase().split('');
    // set variable to hold the total amount of duplicates to 0
    let total = 0;

    // iterate through the strArr using the forEach() method
    // use c as paramater for char if the char is not in dict
    // assign 0 to dict[c]
    strArr.forEach(c => {
        if(!dict[c]){
            dict[c]=0;
        }
        // add the character to dict
        dict[c]++;
    });
    Object.keys(dict).forEach(key=>{
        if(dict[key] > 1){
            total++;
        }
    });

    //return the total
    return total;
}

// export module
module.export = duplicateCount;